<template>
  <form @submit.prevent="handleSubmitForm">
    <div class="form-control">
      <label for="email">Your E-mail</label>
      <input id="email" type="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="message"></label>
      <textarea id="message" rows="5" v-model.trim="message"></textarea>
    </div>
    <p class="errors" v-if="!isFormValid">
      Please enter a valid email and non-empty message.
    </p>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      isFormValid: true,
    };
  },

  methods: {
    handleSubmitForm() {
      this.isFormValid = true;

      if (
        this.email === '' ||
        !this.email.includes('@') ||
        this.message === ''
      ) {
        this.isFormValid = false;
        return;
      }

      this.$store.dispatch('requests/contactCoach', {
        coachId: this.$route.params.id,
        userEmail: this.email,
        message: this.message,
      });

      this.$router.replace('/coaches');
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
