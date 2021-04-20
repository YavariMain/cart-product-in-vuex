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
                <p style="font-weight: bold">Clicked {{ count }} times! Count is {{ parity }}.</p>
            </div>
        </div>
        <hr />
    </div>
</template>

<script>
    export default {
        name: 'Counter',
        data: function() {
            return {
                count: 0
            };
        },
        computed: {
            parity() {
                return this.count % 2 === 0 ? 'even' : 'odd';
            }
        },
        methods: {
            increment() {
                this.count++;
            },
            decrement() {
                this.count--;
            },
            incrementIfOdd() {
                if (this.parity === 'odd') {
                    this.increment();
                }
            },
            incrementAsync() {
                setTimeout(() => {
                    this.increment()
                }, 1000)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .btn {
        margin: 0 3px !important;
    }
    p {
        margin: 0;
    }
</style>