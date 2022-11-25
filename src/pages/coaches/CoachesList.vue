<template>
  <base-dialog
    :show="!!error"
    title="An error occured!"
    @close="handleCloseDialog"
  >
    <p>{{ error }}</p>
  </base-dialog>
  <section><coach-filter @change-filter="setFilters"></coach-filter></section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register"
          >Register as Coache</base-button
        >
      </div>
      <div v-if="isLoading"><base-spinner></base-spinner></div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
          <coach-item
            :id="coach.id"
            :first-name="coach.firstName"
            :last-name="coach.lastName"
            :rate="coach.hourlyRate"
            :areas="coach.areas"
          ></coach-item>
        </li>
      </ul>

      <h3 v-else>No coaches found.</h3>
    </base-card>
  </section>
</template>

<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';

export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      isLoading: false,
      error: null,
    };
  },

  created() {
    this.loadCoaches();
  },

  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];

      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }

        return false;
      });
    },

    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },

    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },

  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },

    async loadCoaches() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('coaches/loadCoaches');
      } catch (err) {
        this.error = err.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },

    handleCloseDialog() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
