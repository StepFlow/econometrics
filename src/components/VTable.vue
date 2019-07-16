<template>
  <div class="lab-table-wrapper">
    <table class="lab-table table is-bordered is-narrow is-hoverable is-fullwidth">
      <thead v-if="heads">
      <tr>
        <th v-if="isNumerated" v-html="(numLetter) ? numLetter : '№'"></th>
        <th
          v-for="(head, i) in heads"
          :key="i"
        >
          {{ head }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
        v-for="i in range(cols[0].length)"
        :key="i + 'row'"
      >
        <td v-if="isNumerated">
          {{ i + 1 }}
        </td>
        <td
          v-for="j in range(cols.length)"
          :key="i * cols.length + j"
        >
          {{ cols[j][i] }}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'VTable',
    props: ['cols', 'heads', 'isNumerated', 'numLetter'],
    created() {
      let rowsCount = this.cols[0].length

      for (let i = 1; i < this.cols.length; ++i) {
        if (this.cols[i].length !== rowsCount) {
          throw Error('Element numbers in cols must be the same')
        }
      }

      if (this.heads && this.cols.length !== this.heads.length) {
        throw Error('Numbers of cols must be equal to numbers of heads')
      }
    },
    methods: {
      range(n) {
        return Array.apply(null, {length: n}).map(Number.call, Number)
      }
    }
  }
</script>

<style>
  .lab-table-wrapper {
    max-width: 100%;
    margin-bottom: 1rem;

    overflow-x: auto;
  }

  .content table.lab-table td,
  .content table.lab-table th {
    vertical-align: middle;
    text-align: center;
  }

</style>
