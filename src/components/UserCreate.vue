<template>
    <div class="card mt-4">
        <div class="card-body">
            <form @submit.prevent="onSubmit">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Seu nome</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Seu e-mail</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Seu telefone</label>
                    <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Ex. ****</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>

            </form>
        </div>
    </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import { createUser } from '@/firebase'
import { reactive } from 'vue'

export default {
  setup () {
    const form = reactive({ nome: '', email: '', telefone: '', senha: '' })
    const onSubmit = async () => {
      await createUser({ ...form })
      form.nome = ''
      form.email = ''
      form.telefone = ''
      form.senha = ''
    }
    return { form, onSubmit }
  }
}
</script>
