<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Login</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Agregar Cursos</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/login">Ver Cursos</router-link>
                </li>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>