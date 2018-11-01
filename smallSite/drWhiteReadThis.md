## Explanation for the linked list on the home page

 <!-- const range = [0, 1, 2]
  <ul>
    <% for(var slug in range){ %>
      <a href="/posts/<%= slug %>">
          <%= public.posts._data[slug].title %></a>


  </ul> -->
  <!-- This is where I was trying to get the linked list of most recent posts,
  but couldn't figure out how to make a loop out of it.  -->

  This is the code I was attempting to make work for the linked list. I thought
  that I could use a loop similar to the one we used to make the list of posts on the blog page, but couldn't quite get how to make it only grab the top three. I thought by giving it a range of indeces, it would look at that index of the object. 