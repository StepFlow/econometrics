<template>
  <section class="section lab">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-12-touch is-9-desktop">
          <div class="content" ref="mathJaxEl">
            <h1 class="title is-1 is-spaced has-text-centered">{{ mainTitle }}</h1>
            <div class="is-divider"></div>
            <slot></slot>
          </div>
        </div>
        <div class="column is-12-touch is-3-desktop">
          <div class="table-of-contents">
            <h6 class="title is-6">Содержание</h6>
            <div class="anchors list is-hoverable">
              <a
                class="anchors__element list-item has-text-black-ter"
                :href="`#${title.id}`"
                v-for="(title, i) in titles"
                :key="i"
              >{{ title.text }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>


  export default {
    props: ['mainTitle'],
    data() {
      return {
        titles: [
          // {
          //   id: 'first',
          //   text: 'Первый заголовок',
          //   titles: [
          //     {
          //       id: 'firstsub',
          //       text: 'Первый заголовок второго уровня',
          //       titles: []
          //     },
          //     {
          //       id: 'secondsub',
          //       text: 'Второй заголовок второго уровня',
          //       titles: []
          //     }
          //   ]
          // },
          // {
          //   id: 'second',
          //   text: 'Второй заголовок',
          //   titles: []
          // }
        ]
      }
    },
    methods: {
      renderLatex() {
        if (window.MathJax) {
          window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub, this.$refs.mathJaxEl])
        }
      }
    },
    created() {
      let dSlots = this.$slots.default

      for (let i = 0; i < dSlots.length; ++i) {
        if ('h2h3'.includes(dSlots[i].tag)) {
          this.titles.push({
            id: dSlots[i].data.attrs.id,
            text: dSlots[i].children[0].text
          })
        }
      }
    },
    mounted() {
      let dSlots = this.$slots.default

      for (let i = 0; i < dSlots.length; ++i) {
        if (dSlots[i].tag === 'h2') {
          let title = dSlots[i].elm

          title.classList.add('title')
          title.classList.add('is-3')
        } else if (dSlots[i].tag === 'h3') {
          let title = dSlots[i].elm

          title.classList.add('title')
          title.classList.add('is-4')
        }
      }

      this.$nextTick(() => {
        this.renderLatex()
      })
    },
    updated() {
      this.renderLatex()
    }
  }
</script>

<style lang="scss">
  .anchors {
    &__element {
      &:hover {
        color: $blue !important;
      }
    }

    &__anchors-item &__anchors-list {
      padding-left: 1.5rem;

      font-size: 0.9em;
      line-height: 1.1;
    }

    &__anchors-item &__anchors-item {
      a {
        margin-bottom: 5px;
      }
    }
  }

  .table-of-contents {
    position: sticky;
    top: 20px;
  }
</style>
