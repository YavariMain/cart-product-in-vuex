<template>
    <div class="container-xl">
        <div class="row">
            <div class="col-xl-12">
                <div>
                    <b-card no-body class="overflow-hidden">
                        <b-row no-gutters>
                            <b-col md="6">
                                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
                            </b-col>
                            <b-col md="6">
                                <b-card-body title="Horizontal Card">
                                    <b-card-text>
                                        This is a wider card with supporting text as a natural lead-in to additional content.
                                        This content is a little bit longer.
                                    </b-card-text>
                                </b-card-body>
                                <b-button href="#" variant="success">add to cart</b-button>
                            </b-col>
                        </b-row>
                    </b-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import axios from 'axios';

    export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
        data() {
            return {
                list:[],
            }
        },
        mounted () {
            this.getData();
        },
        methods: {
            getData() {
                axios
                    .get('https://api.alibtob.com/en/apiv2/catalog/get-product-detail?slug=high-accuracy-leveler-and-straightener-machines-cut-to-length-line-machine-made-in-china-x')
                    .then(response => (this.list = response.data.data.data));
            }
        }
    }
</script>