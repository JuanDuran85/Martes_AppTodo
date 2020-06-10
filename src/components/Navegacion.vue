<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand>
            <router-link class="navbar-brand" to="/">Home</router-link>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <router-link class="nav-link" to="/login">Login</router-link>
                </b-nav-form>
                <b-nav-form>
                    <router-link class="nav-link" to="/agregar">Agregar Cursos</router-link>
                </b-nav-form>
                <b-nav-form>
                    <router-link class="nav-link" to="/ver">Ver Cursos</router-link>
                </b-nav-form>
                <b-nav-form>
                    <router-link class="nav-link" to="/registrar">Registrar</router-link>
                </b-nav-form>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>