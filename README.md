<div align="center">
  <a href="https://github.com/olchyk98/astroneer-resources">
    <img src="https://github.com/user-attachments/assets/2d7d3d7f-dd4f-46fa-b4d0-23fee333b666" alt="Logo" height="200">
  </a>

  <h3 align="center">Astroneer Resources</h3>

  <p align="center">
    An interactive tree-based recipe book for Astroneer!
    <br />
    https://astroneer-resources.fly.dev/
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/endpoint?url=https://ghloc.vercel.app/api/olchyk98/astroneer-resources/badge" alt="Logo" height="20">
  <img src="https://img.shields.io/badge/personal-non_profit-blue" alt="Logo" height="20">
</div>

## About The Project

This project is a tree-based recipe book designed for **Astroneer** players. With this tool, you can easily find crafting recipes by simply searching for an item in the search bar. 
If you’re unsure how to craft one of the ingredients, just click on it, and a detailed card will appear, explaining how to make it.

<img width="1767" alt="Screenshot 2024-11-17 at 20 50 48" src="https://github.com/user-attachments/assets/1454c8fc-2a02-4ec4-a93b-0588ef5cbb00">

## Demo

https://github.com/user-attachments/assets/d82b1496-30d7-4419-9ef5-f2d8bf68120e

## Feature Requests

| Status             | Description                                                 | Requested By        | Implementation Date |
| ------------------ | ------------------                                          | ------------------- | ------------------- |
| ✅                 | Natural resource location on planets                        | Reddit              | 18 November, 2024   |
| ✅                 | "Bigger" zoom out                                           | Reddit              | 18 November, 2024   |
| ✅                 | "Bottom-To-Top" view - Ingredients that are used in recipes | Reddit              | 20 November, 2024   |
| ✅                 | List of recently opened articles                            | Me                  | 20 November, 2024   |
| ✅                 | Button for expanding a recipe section                       | Reddit              | 20 November, 2024   |
| ✅                 | Default Wiki URL change in web to wiki.gg                   | Reddit              | 21 November, 2024   |
| ⏳                 | Marking nodes as "Done"                                     | Me                  |                     |
| ⏳                 | Add icons for planets                                       | Me                  |                     |
| ⏳                 | Scrap/Soil Exchange Rates                                   | Reddit              |                     |
| ⏳                 | Persistent URL state (app routing)                          | Me                  |                     |

## Problem Statement

While playing **Astroneer**, I often found myself needing to look up recipes online. This became even more frustrating as I delved deeper into automation and started tackling more complex projects. 
The main challenge with online resources was the constant back-and-forth navigation. For example, crafting a "Shelter" involves multiple "nested" resources, like "Silicone," which itself requires other components. 

This inspired me to create a tree-based application where all the relevant recipes for a given item are displayed on a single page, saving time and simplifying the crafting process.

## Technical Solution

The most significant challenge of this project was building a complete database of resources. Few people have attempted to create a comprehensive public dataset for **Astroneer**,
and the available resources didn’t meet my needs. To address this, I developed my own web scraper.

First, I downloaded a backup of the **Astroneer Fandom Wiki** from the Wayback Machine. Then, I created one of the most detailed and time-consuming parsers I’ve ever worked on. 
By carefully analyzing the structure of the wiki, I built a generic scraper that could parse any page and organize the data into a custom structure.

Once the dataset was complete, I integrated it with a **Next.js** frontend, leveraging **React Flow** to build interactive recipe graphs. 
For the user interface, I chose **Chakra-UI** because I was familiar with it and found it comfortable to work with. While neither React Flow nor Chakra-UI is perfect, 
they provided a solid foundation for building the application.

## Future Potential

This platform has immense potential to grow and benefit the Astroneer community. 
For example, features like marking resources as "done" (indicating they’ve been crafted) or creating a resource calculator to estimate all necessary materials could be added. 
With this dataset, the possibilities are endless for improving the quality of life for **Astroneer** players.

To contribute to this vision, I’ve made this repository public, including the original scraper code and the frontend implementation, 
so others can build upon it and enhance the experience for everyone.

---

## Contributing
While contributions are appreciated, they are not actively encouraged. If you're using this platform and wish to report a bug or request a feature, please open an Issue instead.
