<template>
    <div class="home">
        <div class="container-xl">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 d-flex justify-content-center mb-3" v-for="item in list">
                    <template>
                        <b-card
                                :title="item.title"
                                :img-src="item.image"
                                img-alt="Image"
                                img-top
                                tag="article"
                                class="mb-2"
                        >
                            <b-card-text>
                               {{ item.preview_contetn }}
                            </b-card-text>

                            <b-button :href="`/blog/${item.id}`" variant="primary">more ...</b-button>
                            <b-button href="#" variant="success" class="ml-1">add to cart</b-button>
                        </b-card>
                    </template>
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
                    .get('https://blog-api.primexc.com/api/mag/news?page=1')
                    .then(response => (this.list = response.data.result));
                console.log(this.list)
            }
        }
    }
</script>

<style scoped>
    .card-img-top {
        height: 300px;
        object-fit: cover;
    }
    .card-title {
        font-size: 20px;
    }
</style>