<template>
  <div class="dashboard">
    <StatisticsView :stats="stats" />
  </div>
</template>

<script>
import StatisticsView from "../components/StatisticsView.vue";
export default {
  components: { StatisticsView },
  name: "DashboardView",
  data() {
    return {
      stats: {
        money: {
          title: "Today's Money",
          value: "$53,000",
          percentage: "+55",
          iconClass: "fa-solid fa-coins",
          detail: "since yesterday",
          iconBackground: "bg-primary",
        },
        users: {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3",
          iconClass: "fa-solid fa-earth-europe",
          iconBackground: "bg-danger",
          detail: "since last week",
        },
        clients: {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2",
          iconClass: "fa-solid fa-user",
          percentageColor: "text-danger",
          iconBackground: "bg-success",
          detail: "since last quarter",
        },
        sales: {
          title: "Sales",
          value: "$103,430",
          percentage: "+5",
          iconClass: "fa-solid fa-chart-line",
          iconBackground: "bg-warning",
          detail: "than last month",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>