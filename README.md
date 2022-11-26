## Environment Setup

```bash
# Base url
VUE_APP_FIREBASE_DB_URL
VUE_APP_FIREBASE_AUTH
VUE_APP_FIREBASE_APIKEY
```

## Build Setup

```bash
# install dependencies
yarn

# serve with hot reload at localhost:8080
yarn dev

# build for production with minification
yarn build
```

## DEMO

<h1 align="center">
 Web Application Screenshots
</h1>

1. This is landing page
   ![desktop-screen1](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/01_coach_list.png)

2. Start with a auth page. You can't reach other pages (such as coaching registration page, request from student user page) if haven't logged-in
   ![desktop-screen2](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/02_login_form.png)

3. Notice: when logged-in "Login to Register as Coach" Button is hidden. If you need to filter any skills "Find Your Coach" checkboxs is useful.
   ![desktop-screen3](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/03_logged_in.png)

4. click View Detail
   ![desktop-screen4](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/04_coach_details.png)

5. click contact button for showing up the request message form (will sent to selected coach)
   ![desktop-screen5](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/05_request_form.png)

6. After that, coach received the messages.
   ![desktop-screen6](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/06_coach_view_request.png)

7. stored on database.
   ![desktop-screen7](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/07_db_requests.png)

8. ofcourse, if you just signed up and need to be Coach -> the "Register as Coach" Button will redirect to registration page.
   ![desktop-screen8](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/09_new_user.png)

9. The registration page have a form looks like this.
   ![desktop-screen9](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/10_register_coach_form.png)

10. If coach registration success, check on the landing page. Now, your coaching is on the list!.
    ![desktop-screen10](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/11_new_coach.png)

11. also stored on database.
    ![desktop-screen11](https://github.com/skydihy/assets/blob/main/vue/vue-coach/images/12_coach_checking.png)
