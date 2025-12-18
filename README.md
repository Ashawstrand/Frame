
Frame Movie Application:


A React + Next.js application that integrates with the TMDB API to let users browse movies and store their favorites. This application incorporates Firebase Authentication, Firestore Database, and Tailwind CSS.


Features:

Favorites System - Toggle the heart on your favorite movie posters to add them to your favorites list.
                 - Login required for authentication and favorites feature
                 - Favorites persist with a filled heart across all screens when logged-in
                 - Firestore database stores user's favorites and specific rules.


Trending         - Page displaying the top trending movies within TMDB
                 - When logged in this page integrates a user's favorites


Search           - Interactive search bar with live results from TMDB
                 - Includes keyboard navigation and posters displayed next to movie titles in a dropdown menu
                 - Search results directly link to movie details page


Movie Details    - A screen dedicated to the movie poster, synopsis, runtime, rating, release-date, and cast members


Authentication  - Email/password signup and login with email verification via Firebase
               
