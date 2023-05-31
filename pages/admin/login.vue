<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="login">
      <!-- <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          v-model="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>
      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Sign in
      </button>
      <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "guest",
});

// //init config
// const config = useRuntimeConfig();
// //init router
// const router = useRouter();
const email = ref("");
const password = ref("");
// const errors: any = ref({});
const { $sanctumAuth } = useNuxtApp();
const router = useRouter();
const errors = ref([]);

async function login() {
  try {
    await $sanctumAuth.login(
      {
        email: email.value,
        password: password.value,
      },
      // optional callback function
      (data) => {
        console.log(data);
        router.push("/admin");
      }
    );
  } catch (e) {
    // your error handling
    errors.value = e.errors;
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
