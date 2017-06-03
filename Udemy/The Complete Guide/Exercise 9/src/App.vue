<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->
                    <full-name v-model="user.fullName"></full-name>

                    <div class="form-group">
                        <label>Email address</label>
                        <input class="form-control" type="email" v-model="user.email" />
                    </div>

                    <div class="form-group">
                        <label>Password</label>
                        <input class="form-control" type="password" v-model="user.password" />
                    </div>

                    <div class="form-group">
                        <label>
                            <input type="radio" value="Yes" v-model="user.store"> Yes
                        </label>
                        <label>
                            <input type="radio" value="No" v-model="user.store"> No
                        </label>
                    </div>

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <button class="btn btn-primary" type="submit" @click.prevent="submitted = true">Submit the form</button>

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{ user.fullName }}</p>
                        <p>Mail: {{ user.email }}</p>
                        <p>Password: {{ user.password }}</p>
                        <p>Store in Database?: {{ user.store }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './FullName.vue'

    export default {
        data () {
            return {
                user: {
                    fullName: 'Maarten Paauw',
                    email: '',
                    password: '',
                    store: 'Yes'
                },
                submitted: false
            }
        },
        components: {
            FullName
        }
    }
</script>

<style>
</style>
