<template>
  <div class="container">
    <h1>Books</h1>
    
    <select v-model="filter_category_id" @change="fetchBooks">
      <option value="">All Categories</option>
      <!-- Loop through categories to display each one as an option -->
      <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
    </select>
    
    <ul>
      <li v-for="(book, index) in filteredBooks" :key="book.id">
        <div class="book">
          {{ index + 1 }}- {{ book.title }} by {{ book.author }} ({{ bookCategories(book).join(', ') }})
          <button @click="deleteBook(book.id)">Delete</button>
        </div>  
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      books: [], // Array to hold book data
      categories: [], // Array to hold category data
      filter_category_id: '' // Variable to store selected category for filtering
    };
  },
  computed: {
    filteredBooks() {
      if (this.filter_category_id) {
        // Return books that match the selected category
        return this.books.filter(book => book.category_ids.includes(Number(this.filter_category_id)));
      }
      return this.books;
    }
  },
  methods: {
    fetchBooks() {
      axios.get('http://localhost:3000/books')
        .then(response => {
          this.books = response.data; // Assign the fetched books to the books array
        });
    },
    fetchCategories() {
      axios.get('http://localhost:3000/categories')
        .then(response => {
          this.categories = response.data; // Assign the fetched categories to the categories array
        });
    },
    deleteBook(id) {
      axios.delete(`http://localhost:3000/books/${id}`)
        .then(() => {
          this.fetchBooks(); 
        });
    },
    bookCategories(book) {
      return book.category_ids.map(category_id => {
        // Find the category name that matches the category ID
        const category = this.categories.find(category => category.id == category_id);
        return category ? category.name : 'Unknown'; 
      });
    }
  },
  created() {
    this.fetchCategories();
    this.fetchBooks();
  }
};
</script>
