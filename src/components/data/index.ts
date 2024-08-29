//import { v4 as uuid } from "uuid";
import { IProduct } from "../interfaces";

export const ProductList: IProduct[] = [
  {
    id: "1", //uuid(),
    title: "Unspalsh+",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        atque distinctio ipsa totam non eum laudantium quos facilis molestias,
        impedit aspernatur dicta mollitia deserunt nemo unde tempore,
        praesentium dignissimos recusandae?`,
    imageURL:
      "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "medicine",
      imageURL:
        "https://plus.unsplash.com/premium_photo-1675896084254-dcb626387e1e?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: "2", //uuid(),
    title: "Android Smartwatch",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        atque distinctio ipsa totam non eum laudantium quos facilis molestias,
        impedit aspernatur dicta mollitia deserunt nemo unde tempore,
        praesentium dignissimos recusandae?`,
    imageURL:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "medicine",
      imageURL:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: "3", //uuid(),
    title: "C D-X",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        atque distinctio ipsa totam non eum laudantium quos facilis molestias,
        impedit aspernatur dicta mollitia deserunt nemo unde tempore,
        praesentium dignissimos recusandae?`,
    imageURL:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "medicine",
      imageURL:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: "4", //uuid(),
    title: "Vitality Shot",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        atque distinctio ipsa totam non eum laudantium quos facilis molestias,
        impedit aspernatur dicta mollitia deserunt nemo unde tempore,
        praesentium dignissimos recusandae?`,
    imageURL:
      "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "medicine",
      imageURL:
        "https://images.unsplash.com/photo-1524638067-feba7e8ed70f?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: "5", //uuid(),
    title: "Maui Moisture",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        atque distinctio ipsa totam non eum laudantium quos facilis molestias,
        impedit aspernatur dicta mollitia deserunt nemo unde tempore,
        praesentium dignissimos recusandae?`,
    imageURL:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "medicine",
      imageURL:
        "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: "6", //uuid(),
    title: "Mitzie Organics",
    description: `Mitzie Organic Cleaning Products. Packaged in an amber glass bottle to lock in the vegan goodness.`,
    imageURL:
      "https://images.unsplash.com/photo-1549049950-48d5887197a0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "medicine",
      imageURL:
        "https://images.unsplash.com/photo-1549049950-48d5887197a0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: "7", //uuid(),
    title: "Vinta.co",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        atque distinctio ipsa totam non eum laudantium quos facilis molestias,
        impedit aspernatur dicta mollitia deserunt nemo unde tempore,
        praesentium dignissimos recusandae?`,
    imageURL:
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "medicine",
      imageURL:
        "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
  {
    id: "8", //uuid(),
    title: "FOREST GIN",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
        atque distinctio ipsa totam non eum laudantium quos facilis molestias,
        impedit aspernatur dicta mollitia deserunt nemo unde tempore,
        praesentium dignissimos recusandae?`,
    imageURL:
      "https://images.unsplash.com/photo-1530914547840-346c183410de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: "500",
    colors: ["#FF0032", "#2563eb", "#FF6E31"],
    category: {
      name: "medicine",
      imageURL:
        "https://images.unsplash.com/photo-1530914547840-346c183410de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  },
];
