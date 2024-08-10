<template>
  <div class="container">
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <input v-model="title" placeholder="Title" required />
      <input v-model="author" placeholder="Author" required />
      <div class="category-options">
        <span v-for="category in categories" :key="category.id" 
              :class="{'selected': selectedCategories.includes(category.id)}" 
              @click="toggleCategory(category.id)">
          {{ category.name }}
        </span>
      </div>
      <input v-model="published_year" placeholder="Published Year" required />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',               
      author: '',              
      selectedCategories: [],  
      published_year: '',      
      categories: []           
    };
  },
  methods: {
    addBook() {
      axios.post('http://localhost:3000/books', {
        title: this.title,                    
        author: this.author,                  
        category_ids: this.selectedCategories, 
        published_year: this.published_year,  
      }).then(() => {
        this.title = '';
        this.author = '';
        this.selectedCategories = [];
        this.published_year = '';
        // Emit a custom event 'bookAdded' to notify the parent component
        this.$emit('bookAdded');
      });
    },
    fetchCategory() {
      axios.get('http://localhost:3000/categories')
        .then(response => {
          this.categories = response.data; // Assign the fetched categories to the categories array
        });
    },
    toggleCategory(categoryId) {
      const index = this.selectedCategories.indexOf(categoryId);
      if (index > -1) {
        // If the category is already selected, remove it
        this.selectedCategories.splice(index, 1);
      } else {
        // If the category is not selected, add it to the selection
        this.selectedCategories.push(categoryId);
      }
    }
  },
  created(){
    this.fetchCategory();
  }
};

</script>
