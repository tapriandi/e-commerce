<template>
    <div class="card">
        <img src="../assets/happy-fox.png" alt="Card image cap">
        <div class="midle">
            <h3>Lorem</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quo quibusdam ullam ab, consectetur dolor sapiente quae sint repellendus dolorum reprehenderit doloribus</p>
            <button class="btn btn-primary">see detail</button>
        </div>
        <!-- <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div> -->
    </div>
</template>

<script>
export default {
    props: ['data'],
    name: 'card'
}
</script>

<style>
    .card {
        margin: 1rem;
    }
    .card img {
        height: 25rem;
        width: 30rem;
    }
    .midle{
        width: 100%;
        height: 100%;
        opacity: 0;
        position: absolute;
        transition: 0.5s;
        padding: 10rem 1rem 1rem 2rem;
    }
    .midle:hover{
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.6);

    }
</style>