<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occured!"
      @close="handleCloseDialog"
      ><p>{{ error }}</p></base-dialog
    >
    <section>
      <base-card>
        <header><h2>Requests Received</h2></header>
        <ul v-if="hasRequests">
          <request-item
            v-for="req in receivedRequests"
            :key="req.id"
            :email="req.userEmail"
            :message="req.message"
          ></request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';

export default {
  components: { RequestItem },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  created() {
    this.loadRequests();
  },

  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },

    hasRequests() {
      return !this.isLoading && this.$store.getters['requests/hasRequests'];
    },
  },

  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/fetchRequests');
      } catch (err) {
        this.error = err.message || 'Fetch requests failed';
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
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
