<template>
  <div>
    <lab main-title="Лабораторная работа №1">
      <h2 id="first">Постановка задачи</h2>
      <p>Дан статистический ряд:
<!--        <vue-mathjax formula="`\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\)`"></vue-mathjax>-->
      </p>
      <v-table
        :cols="initialTableCols"
      ></v-table>
      <span>Требуется:</span>
      <ol>
        <li>Записать значения результатов эксперимента в виде вариационного ряда.</li>
        <li>Найти медиану
          <vue-mathjax formula="`M_e`"></vue-mathjax>
          вариационного ряда.</li>
        <li>Найти моду
          <vue-mathjax formula="`M_0`"></vue-mathjax>
          вариационного ряда.</li>
        <li>Найти размах варьирования и длину интервала, если число итервалов
          <vue-mathjax formula="`\quad m = 9.`"></vue-mathjax>
        </li>
        <li>Построить полигон частот, гистограмму относительных частот и приближенный график эмпирической функции
          распределения.</li>
        <li>Найти числовые характеристики выборки: выборочную среднюю,
          исправленную дисперсию, выборочное среднее квадратичное отклонение,
          выборочный коэффициент вариации</li>
      </ol>
      <h2 id="second">Решение</h2>
      <h3 id="statisticsDistribution">Статистическое распределение выборки</h3>
      <p>
        Располагаем исходный ряд в неубывающем порядке, т.е. записываем вариационный ряд:
      </p>
      <v-table
        :cols="variationRowTableCols"
      ></v-table>
      <p>Находим медиану
        <vue-mathjax formula="`M_e`"></vue-mathjax>
        вариационного ряда, т.е. находим варианту,
        которая делит вариационный ряд на две части, равные по числу вариант:
        <vue-mathjax :formula="formulas.median"></vue-mathjax>
      </p>
      <p>Находим моду
        <vue-mathjax formula="`M_0`"></vue-mathjax>
        вариационного ряда, т.е. варианту, имеющую
        наибольшую частоту:
        <vue-mathjax :formula="formulas.mode"></vue-mathjax>
        Данный вариационный ряд имеет три моды, т.к. их частоты равны {{ modeFrequency }}.
      </p>
      <p>Находим размах варьирования по формуле
        <vue-mathjax formula="`\quad R = x_{max} - x_{min}:`"></vue-mathjax>
        <vue-mathjax :formula="formulas.variationRange"></vue-mathjax>
      </p>
      <p>Вычисляем длину интервала по формуле
        <vue-mathjax formula="`\quad h=\frac{x_{max} - x_{min}}{m}:`"></vue-mathjax>
        <vue-mathjax :formula="formulas.intervalLength"></vue-mathjax>
      </p>
      <p>Все вычисления записываем в таблицу.</p>
      <v-table
        :heads="tables.statisticDist.heads"
        :cols="[intervalBordersStr, middles, intervalFreq, relFreq, intervalDensity]"
        :is-numerated="true"
        num-letter="<br><br>$$m_i$$"
      ></v-table>
      <p>
        Строим полигон частот и гистограмму относительных частот
      </p>
      <interval-frequency
        :x="middles"
        :y="intervalFreq"
        :styles="charts.styles"
      ></interval-frequency>
      <relative-frequency
        :x="intervalBordersStr"
        :y="relFreq"
      ></relative-frequency>

      <h3 id="empericalFunction">Эмпирическая функция распределения</h3>
      <p>Значения эмпирической функции распределения ищем по формулам &nbsp;
        <vue-mathjax :formula="formulas.empericalFunctionCommon"></vue-mathjax>
      </p>
      <p>
        <vue-mathjax :formula="formulas.empericalFunction"></vue-mathjax>
      </p>
      <p>
        Строим приближенный график эмпирической функции распределения:
      </p>
      <p>
        <emperical-distribution-function
          :x="intervalBorders"
          :y="distributionFunction"
        ></emperical-distribution-function>
      </p>
      <h3 id="variationRow">Числовые характеристики выборки</h3>
      <p>
        Выборочная средняя
        <vue-mathjax :formula="formulas.sampleAverage"></vue-mathjax>
      </p>
      <p>
        Исправленная дисперсия
        <vue-mathjax :formula="formulas.correctedVariance"></vue-mathjax>
      </p>
      <p>
        Выборочное среднее квадратичное отклонение
        <vue-mathjax :formula="formulas.sampleStandardDeviation"></vue-mathjax>
      </p>
      <p>
        Выборочный коэффициент вариации
        <vue-mathjax :formula="formulas.sampleVariationCoefficient"></vue-mathjax>
      </p>
    </lab>
  </div>
</template>

<script>
  import Lab from '@/components/Lab'
  import VTable from '@/components/VTable'
  import IntervalFrequency from '@/components/charts/IntervalFrequency'
  import RelativeFrequency from '@/components/charts/relativeFrequency'
  import EmpericalDistributionFunction from '@/components/charts/EmpericalDistributionFunction'
  import * as math from 'mathjs'

  export default {
    components: {
      Lab,
      IntervalFrequency,
      RelativeFrequency,
      EmpericalDistributionFunction,
      VTable
    },
    data() {
      return {
        initialTableCols: [],
        initialRow: [],
        intervalsCount: 9,
        variationRow: [],
        median: null,
        mode: null,
        variationRange: null,
        intervalLength: null,
        intervalBorders: [],
        middles: [],
        intervalFreq: [],
        relFreq: [],
        intervalDensity: [],
        freqPolyData: [],
        distributionFunction: [],
        sampleAverage: null,
        correctedVariance: null,
        sampleStandardDeviation: null,
        sampleVariationCoefficient: null,

        formulas: {
          median: null,
          mode: null,
          variationRange: null,
          empericalFunctionCommon: null,
          empericalFunction: null
        },

        charts: {
          styles: {
            marginBottom: '1.5rem'
          }
        },

        tables: {
          statisticDist: {
            heads: [
              'Границы интервала $$x_i - x_{i + 1}$$',
              'Середина интервала $$x\'_i = \\frac{x_i + x_{i + 1}}{2}$$',
              'Частота интервала $$n_i$$',
              'Относительная частота  $$W_i = \\frac{n_i}{n}$$',
              'Плотность частоты $$\\frac{W_i}{h}$$'
            ]
          }
        }
      }
    },
    computed: {
      variationRowTableCols() {
        return math.transpose(math.reshape(this.variationRow, [10, 10]))
      },
      modeFrequency() {
        return this.variationRow.filter(x => x === this.mode[0]).length
      },
      intervalBordersStr() {
        return this.intervalBorders.reduce(function(res, elem, i, ib) {
          if (i !== ib.length - 1) {
            res[i] = elem.toFixed(2)
          }

          if (i !== 0) {
            res[i - 1] += ` – ${elem.toFixed(2)}`
          }

          return res
        }, [])
      }
    },
    created() {
      this.initialTableCols = math.transpose([
        [44.8, 46.2, 45.7, 44.0, 46.4, 45.2, 46.7, 45.4, 45.3, 46.1],
        [44.3, 45.3, 45.6, 46.7, 44.5, 46.0, 45.7, 45.0, 46.4, 45.9],
        [44.4, 45.4, 46.1, 43.4, 46.5, 45.9, 43.9, 45.7, 47.1, 44.9],
        [43.8, 45.6, 45.2, 46.4, 44.2, 46.5, 45.7, 44.7, 46.0, 45.8],
        [44.3, 45.5, 46.7, 44.9, 46.2, 46.7, 44.6, 46.0, 45.4, 45.0],
        [45.4, 45.3, 44.1, 46.6, 44.8, 45.6, 43.7, 46.8, 45.2, 46.1],
        [44.5, 45.4, 45.1, 46.2, 44.2, 46.4, 45.7, 43.9, 47.2, 46.0],
        [43.9, 45.6, 44.9, 44.5, 46.2, 46.7, 44.3, 46.1, 47.7, 45.8],
        [45.6, 45.2, 44.2, 46.0, 44.7, 46.5, 43.5, 45.4, 47.1, 44.0],
        [46.2, 44.2, 45.5, 46.0, 45.7, 46.4, 44.6, 47.0, 45.2, 46.9]
      ])

      this.initialRow = this.initialTableCols.flat()

      this.variationRow = this.initialRow.sort((a, b) => {
        return a - b
      })

      this.median = math.median(this.variationRow)
      this.mode = math.mode(this.variationRow)
      this.variationRange = +(this.variationRow[this.variationRow.length - 1] - this.variationRow[0]).toFixed(1)
      this.intervalLength = this.variationRange / this.intervalsCount
      this.intervalLength = math.round(this.intervalLength, 2)

      this.intervalBorders = []
      this.intervalBorders.push(this.variationRow[0])
      for (let i = 1; i < 10; ++i) {
        let border = this.intervalBorders[i - 1] + this.intervalLength
        this.intervalBorders.push(math.round(border, 2))
      }

      for (let i = 0; i < this.intervalBorders.length - 1; ++i) {
        this.middles[i] = (this.intervalBorders[i + 1] + this.intervalBorders[i]) / 2
        this.middles[i] = math.round(this.middles[i], 2)
      }

      this.intervalFreq = new Array(this.intervalsCount)
      this.intervalFreq.fill(0)
      for (let i = 0, j = 0; i < this.intervalBorders.length && j < this.variationRow.length; ++i) {
        while (math.smallerEq(this.variationRow[j], this.intervalBorders[i + 1])) {
          ++this.intervalFreq[i]
          ++j

          if (j >= this.variationRow.length) {
            break
          }
        }
      }

      this.relFreq = this.intervalFreq.map((el) => {
        return math.round(el / this.variationRow.length, 3)
      })

      this.intervalDensity = this.relFreq.map((el) => {
        return math.round(el / this.intervalLength, 4)
      })

      this.freqPolyData = this.middles.map((middle, i) => {
        return [middle, this.intervalFreq[i]]
      })

      this.distributionFunction = [0]
      let currentFreq = 0
      for (let i = 0; i < this.intervalFreq.length; ++i) {
        this.distributionFunction.push((currentFreq += this.intervalFreq[i]) / this.variationRow.length)
      }

      let saTop = this.middles.reduce((prev, middle, i) => {
        return prev + middle * this.intervalFreq[i]
      }, 0)
      this.sampleAverage = +(saTop / this.variationRow.length).toFixed(2)

      this.correctedVariance = +(this.middles.reduce((prev, middle, i) => {
        return prev + math.pow((middle - this.sampleAverage), 2) * this.intervalFreq[i]
      }, 0) / (this.variationRow.length - 1)).toFixed(2)

      this.sampleStandardDeviation = +math.sqrt(this.correctedVariance).toFixed(2)

      this.sampleVariationCoefficient = (this.sampleStandardDeviation / this.sampleAverage) * 100



      this.formulas.median = `$$M_e = \\frac{x_{50} + x_{51}}{2}; \\quad
        M_e = \\frac{${this.variationRow[49]} + ${this.variationRow[50]}}{2} = ${this.median};$$`

      this.formulas.mode = `\`${this.mode.map(m => 'M_0 = ' + m).join('; \\quad')} \`.`

      this.formulas.variationRange = `$$x_{min} = ${this.variationRow[0]}; \\quad
        x_{max} = ${this.variationRow[this.variationRow.length - 1]}; \\quad
        R = ${this.variationRow[0]} - ${this.variationRow[this.variationRow.length - 1]}
        = ${this.variationRange}.$$`

      this.formulas.intervalLength = `$$\\quad h=\\frac{${this.variationRange}}{${this.intervalsCount}}
        \\approx ${this.intervalLength}.$$`

      this.formulas.empericalFunctionCommon = '$F^*(x_1) = 0;\\quad$\n' +
        '$F^*(x_2) = \\dfrac{n_1}{n}; \\quad$ $ F^*(x_3) = \\dfrac{n_1 + n_2}{n}; \\quad$ $ \\dots; \\quad$\n' +
        '$F^*(x_k) = \\dfrac{n_1 + n_2 + \\dots + n_{k - 1}}{n}; \\quad$\n' +
        '$F^*(x_{k+1}) = \\dfrac{n_1 + n_2 + \\dots + n_k}{n} = 1:$'

      let ef = [`$F^*(${this.intervalBorders[0]}) = 0`]
      // this.formulas.empericalFunction =
      currentFreq = 0
      for (let i = 1; i < this.intervalBorders.length; ++i) {
        ef.push(`$F^*(${this.intervalBorders[1]}) =
          \\dfrac{${(currentFreq) ? currentFreq + ' + ' : ''} ${this.intervalFreq[i - 1]}}{${this.variationRow.length}}
          = ${this.distributionFunction[i]}`)
        currentFreq += this.intervalFreq[i - 1]
      }

      this.formulas.empericalFunction = ef.join(';\\quad$') + '.$'

      this.formulas.sampleAverage = `$$\\overline{x}_в = \\frac{x_1 n_1 + x_2 n_2 + \\dots + x_k n_k}{n} =
        \\frac{${saTop}}{${this.variationRow.length}} \\approx ${this.sampleAverage}$$`

      this.formulas.correctedVariance = `$$S^2 = \\frac{\\sum\\limits_{i=1}^{k}(x'_i - \\overline{x}_в)^2 \\cdot n_i}{n - 1}
        = ${this.correctedVariance}.$$`

      this.formulas.sampleStandardDeviation = `$$S = \\sqrt{S^2} = \\sqrt{${this.correctedVariance}} \\approx ${this.sampleStandardDeviation}$$`

      this.formulas.sampleVariationCoefficient = `$$\\gamma = \\frac{S}{\\overline{x}_в} \\cdot 100\\% =
        \\frac{${this.sampleStandardDeviation}}{${this.sampleAverage}} \\cdot 100\\% \\approx ${this.sampleVariationCoefficient.toFixed(0)}\\%$$`
    }
  }
</script>

<style lang="scss">

</style>
