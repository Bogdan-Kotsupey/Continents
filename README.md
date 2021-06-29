[DEMOLINK](https://bogdan-kotsupey.github.io/Continents/)

Task:

1. Create a reactjs application which is capable to render nested json data struture of the following format:
{
  "data": [
    {
      "name": "String",
      "children": [
        {
          "name": "String",
          "children": [
            // ...
          ]
        }, {
          "name": "String",
          "children": [
            // ...
          ]
        },
        // ...
      ]
    }, {
      "name": "String",
      "children": [
        // ...
      ]
    },
    // ...
  ]
}

This component should show each node's name and indicate relation to it's children nodes.

2. Make each node open/close by click on it's name.

3. Make collapsible component logic reusable by using HOC or react hooks.

4. Using react context make it so when you click on any last node it will close all nodes in the tree.

5. Generate data for your component so it can open to n-th level with m children in each node.

6. Connect this countries graphql API to your components to display nesting of Continent, Country and Language types
