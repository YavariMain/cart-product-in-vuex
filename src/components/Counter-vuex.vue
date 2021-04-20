<template>
    <div class="container-xl">
        <div class="row">
            <div class="col-lg-12 d-flex justify-content-center mb-3">
                <b-button @click="increment" variant="success">Increment</b-button>
                <b-button @click="decrement" variant="danger">Decrement</b-button>
                <b-button @click="incrementIfOdd" variant="info">Increment if Odd</b-button>
                <b-button @click="incrementAsync" variant="warning">Increment Async</b-button>
            </div>
            <div class="col-lg-12 text-center">
                <p style="font-weight: bold">Clicked {{ counter }} times! Count is {{ parity }}.</p>
            </div>
        </div>
        <hr />
        <div class="row">
            <div class="col-lg-12 text-center">
                <p style="font-weight: bold">welcome {{ loggedInUser.name }} you role: {{ loggedInUser.role }}</p>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        // computed: {
        //   countName() {
        //     return " welcome " + this.$store.state.loggedInUser.name + " you rol: " + this.$store.state.loggedInUser.role
        //   }
        // },
        // computed: mapState ({
        //     counter: state => state.counter,
        //     loggedInUser: state => state.loggedInUser
        // }),
        data() {
          return {
              item: 3
          }
        },
        computed: {
            ...mapState([
                'counter',
                'loggedInUser',
                'names',
                'evenOdd'
            ]),
            parity() {
                return this.counter % 2 === 0 ? this.evenOdd.even : this.evenOdd.odd
            },
        },
        methods: {
            increment() {
                this.$store.commit('increment', this.item);
            },
            decrement() {
                this.$store.commit('decrement');
            },
            incrementIfOdd() {
                if (this.parity === this.evenOdd.odd) {
                    this.increment();
                }
            },
            incrementAsync() {
                setTimeout(() => {this.increment()}, 1000)
            }
        }
    }
</script>

<style scoped>
    button {
        margin: 0 3px;
    }
    p {
        margin: 0;
    }
</style>