import React, { Component } from 'react';
import './index.css';

class UserFinderApp extends Component {
  fetchUserData() {
    const usernameInput = document.getElementById("username-input");
    const username = usernameInput.value;

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        const userInfo = document.getElementById("user-info");
        const avatar = document.getElementById("avatar");
        const name = document.getElementById("name");
        const location = document.getElementById("location");
        const portfolio = document.getElementById("portfolio");
        const repositories = document.getElementById("repositories");
        const followers = document.getElementById("followers");
        const bio = document.getElementById("bio");

        avatar.src = data.avatar_url;
        name.textContent = `Name: ${data.name}`;
        location.textContent = `Location: ${data.location || "N/A"}`;
        portfolio.innerHTML = `Portfolio: <a target="_blank" href="${data.html_url || "#"}">Portfolio</a>`;
        repositories.textContent = `Public Repos: ${data.public_repos}`;
        followers.textContent = `Followers: ${data.followers}`;
        bio.textContent = `Bio: ${data.bio || "N/A"}`;

        userInfo.classList.remove("hidden");
      })
      .catch((error) => {
        console.log(error);
        alert("An error occurred. Please try again.");
      });
  }

  render() {
    return (
      <div className="container">
        <h1>Github User Finder</h1>
        <div className="input-container">
          <input type="text" id="username-input" placeholder="Enter GitHub username" />
          <button onClick={this.fetchUserData}>Search</button>
        </div>
        <div id="user-info" className="hidden">
          <img id="avatar" src="" alt="User Avatar" />
          <div className="info-container">
            <h2 id="name"></h2>
            <p id="location"></p>
            <p id="portfolio"></p>
            <p id="repositories"></p>
            <p id="followers"></p>
            <p id="bio"></p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserFinderApp;
