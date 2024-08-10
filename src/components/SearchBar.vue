<template>
  <div class="container">
    <div class="search-bar">
      <input v-model="query" placeholder="Search by title" />
      <button @click="onSearch">Search</button>
    </div>  

    <div class="result-books">
      <h1>Search results</h1>
      <ul>
        <li v-for="book in result" :key="book.id">
          {{ book.title }} by {{ book.author }}
          <button @click="deleteBook(book.id)">Delete</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';


export default {
  data() {
    return {
      query: '',
      books: [],
      result:[]
    };
  },
  methods: {
    fetchBooks() {
      axios.get('http://localhost:3000/books')
        .then(response => {
          this.books = response.data;
        });
    },
    onSearch() {
      this.result = this.books.filter(book => 
        book.title.toLowerCase().includes(this.query.toLowerCase())
      );
    }
  },
  created() {
    this.fetchBooks();
  }
};
</script>

