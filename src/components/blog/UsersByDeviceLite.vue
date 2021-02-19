<template>
  <div class="card card-small h-100">

    <!-- Card Header -->
    <div class="card-header border-bottom">
      <h6 class="m-0">{{title}}</h6>
    </div>

    <!-- Chart -->
    <div class="card-body d-flex py-0">
      <canvas height="220" ref="canvas" class="blog-users-by-device m-auto"></canvas>
    </div>

    <d-card-footer class="border-top">
      <d-row>

        <!-- Time Frame -->
        <d-col>
          <d-select size="sm" value="last-week" style="max-width: 130px;">
            <option value="last-week">Last Week</option>
            <option value="today">Today</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
          </d-select>
        </d-col>

        <!-- View Full Report -->
        <d-col class="text-right view-report">
          <a href="#">View full report &rarr;</a>
        </d-col>

      </d-row>
    </d-card-footer>
  </div>
</template>

<script>
import Chart from '../../utils/chart';

const defaultChartData = {
  datasets: [{
    hoverBorderColor: '#ffffff',
    data: [30, 70],
    backgroundColor: [
      'red',
      'green',
    ],
  }],
  labels: ['Homme', 'Femme'],
};

export default {
  name: 'users-by-device',
  props: {
    /**
       * The chart config.
       */
    chartConfig: {
      type: Object,
      default() {
        return {};
      },
    },
    /**
       * The chart options.
       */
    chartOptions: {
      type: Object,
      default() {
        return {};
      },
    },
    /**
       * The chart data.
       */
    chartData: {
      type: Object,
      default() {
        return defaultChartData;
      },
    },
    /**
       * The chart title.
       */
    title: {
      type: String,
      default: 'Statistique par Sexe',
    },
  },
  mounted() {
    const chartConfig = {
      type: 'pie',
      data: this.chartData,
      options: {
        ...{
          legend: {
            position: 'bottom',
            labels: {
              padding: 25,
              boxWidth: 20,
            },
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: 'index',
            position: 'nearest',
          },
        },
        ...this.chartOptions,
      },
    };

    new Chart(this.$refs.canvas, chartConfig);
  },
};
</script>

