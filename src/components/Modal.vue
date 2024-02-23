<template>
  <div class="modal-page-mask" v-if="showModal">
    <div class="modal-page-content">
      <div class="modal-page-header">
        <span class="modal-page-title">Update Information</span>
        
        <button class="modal-page-close" @click="closeModal">X</button>
      </div>
      <fieldset>
        <input name="text" placeholder="id" type="text" tabindex="1" required autofocus>
      </fieldset>
      <fieldset>
        <input name="text" placeholder="Product name" type="text" tabindex="2" required autofocus>
      </fieldset>
      <fieldset>
        <input name="text" placeholder="Description" type="text" tabindex="3" required autofocus>
      </fieldset>
      <fieldset>
        <input name="number" placeholder="Price" type="text" tabindex="4" required autofocus>
      </fieldset>
      <fieldset>
        <input name="text" placeholder="Image" type="text" tabindex="5" required autofocus>
      </fieldset>

      <div class="modal-page-body">
        <p></p>
        <button @click="update">Update</button>
        <button @click="del">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showModal: {
      type: Boolean,
      default: false
    },
    modalText: String
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    update() {
      // Add your update logic here
      console.log('Update clicked');
      // Close the modal page after update
      this.closeModal();
    },
    add() {
      // Add your update logic here
      console.log('Add clicked');
      // Close the modal page after update
      this.closeModal();
    },
    del() {
      // Add your update logic here
      console.log('delete clicked');
      // Close the modal page after update
      this.closeModal();
    },
  }
}
</script>

<style scoped>
.modal-page-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-page-content {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.modal-page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-page-title {
  font-size: 18px;
}

.modal-page-close {
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 15px;
  color: black;
}

.modal-page-body {
  text-align: center;
}

.modal-page-body p {
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

}
</style>
