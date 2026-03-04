// central product dataset used across the application
// imports for all available images in the repository
import Almond from "../assets/productImage/almond.jpg";
import AlmondHover from "../assets/productImage/almondHover.jpg";
import ChocolateProduct from "../assets/productImage/chocolate.jpg";
import Juice from "../assets/productImage/juice.jpg";
import JuiceHover from "../assets/productImage/juiceHover.jpg";
import Juices from "../assets/productImage/onedemo.jpg";
import BakeryBlast from "../assets/productImage/bakeryBlast.png";
import FruitsBlast from "../assets/productImage/fruitsBlast.png";

// new arrival assets
import BananaSnack from "../assets/newarrival/bananasnackpack.jpg";
import BananaSnackHover from "../assets/newarrival/bananasnackpackhover.jpg";
import BlackPepper from "../assets/newarrival/blackpepperspice.jpg";
import BlackPepperHover from "../assets/newarrival/blackpeppespicehover.jpg";
import Cardamon from "../assets/newarrival/cardamon.jpg";
import CardamonHover from "../assets/newarrival/cardamonhover.jpg";
import ChiliFlakes from "../assets/newarrival/chilliflakes.jpg";
import ChiliFlakesHover from "../assets/newarrival/chillflakeshover.jpg";
import GroundnutOil from "../assets/newarrival/groundnutoil.jpg";
import GroundnutOilHover from "../assets/newarrival/groundoiolhover.jpg";
import JuiceRoute from "../assets/newarrival/juiceroute.jpg";
import JuiceRouteHover from "../assets/newarrival/juiceroutehover.jpg";
import PotatoCrunch from "../assets/newarrival/potatocrunch.jpg";
import PotatoCrunchHover from "../assets/newarrival/potatocrunchhover.jpg";
import TomatoKetchup from "../assets/newarrival/tometoketchup.jpg";
import TomatoKetchupHover from "../assets/newarrival/tometoetchuphover.jpg";

export const products = [
  {
    id: 1,
    tag: 'New',
    name: 'Mixed Fruits Chocolate Pack',
    category: 'Sweets',
    price: '$16',
    oldPrice: '$20',
    rating: 4,
    stock: '1 Pack',
    image: ChocolateProduct,
    hoverImage: ChocolateProduct,
  },
  {
    id: 2,
    tag: 'Hot',
    name: 'Organic Apple Juice Pack',
    category: 'Juice',
    price: '$36',
    oldPrice: '$45',
    rating: 4,
    stock: '100 ml',
    image: Juices,
    hoverImage: Juices,
  },
  {
    id: 3,
    tag: 'Sale',
    name: 'Roasted Almonds Pack',
    category: 'Nuts',
    price: '$32',
    oldPrice: '$39',
    rating: 5,
    stock: '250 g',
    image: Almond,
    hoverImage: AlmondHover,
  },
  {
    id: 4,
    tag: 'Sale',
    name: 'Fresh Mango Slice Juice',
    category: 'Juice',
    price: '$25',
    oldPrice: '$30',
    rating: 4,
    stock: 'Out Of Stock',
    image: Juice,
    hoverImage: JuiceHover,
  },
  {
    id: 5,
    tag: 'New',
    name: 'Bakery Blast',
    category: 'Bakery',
    price: '$12',
    oldPrice: '$15',
    rating: 3,
    stock: 'In Stock',
    image: BakeryBlast,
    hoverImage: BakeryBlast,
  },
  {
    id: 6,
    tag: 'Hot',
    name: 'Fruits Blast Pack',
    category: 'Fruits',
    price: '$18',
    oldPrice: '$22',
    rating: 4,
    stock: 'Limited',
    image: FruitsBlast,
    hoverImage: FruitsBlast,
  },
  // new arrivals
  {
    id: 7,
    tag: 'New',
    name: 'Banana Snack Pack',
    category: 'New Arrivals',
    price: '$10',
    oldPrice: '$12',
    rating: 4,
    stock: 'In Stock',
    image: BananaSnack,
    hoverImage: BananaSnackHover,
  },
  {
    id: 8,
    tag: 'New',
    name: 'Black Pepper Spice',
    category: 'New Arrivals',
    price: '$5',
    oldPrice: '$7',
    rating: 3,
    stock: 'In Stock',
    image: BlackPepper,
    hoverImage: BlackPepperHover,
  },
  {
    id: 9,
    tag: 'New',
    name: 'Organic Cardamon',
    category: 'New Arrivals',
    price: '$15',
    oldPrice: '$18',
    rating: 5,
    stock: 'Limited',
    image: Cardamon,
    hoverImage: CardamonHover,
  },
  {
    id: 10,
    tag: 'New',
    name: 'Chili Flakes',
    category: 'New Arrivals',
    price: '$8',
    oldPrice: '$10',
    rating: 4,
    stock: 'In Stock',
    image: ChiliFlakes,
    hoverImage: ChiliFlakesHover,
  },
  {
    id: 11,
    tag: 'New',
    name: 'Groundnut Oil',
    category: 'New Arrivals',
    price: '$20',
    oldPrice: '$25',
    rating: 4,
    stock: 'In Stock',
    image: GroundnutOil,
    hoverImage: GroundnutOilHover,
  },
  {
    id: 12,
    tag: 'New',
    name: 'Juice Route',
    category: 'New Arrivals',
    price: '$30',
    oldPrice: '$35',
    rating: 5,
    stock: 'In Stock',
    image: JuiceRoute,
    hoverImage: JuiceRouteHover,
  },
  {
    id: 13,
    tag: 'New',
    name: 'Potato Crunch',
    category: 'New Arrivals',
    price: '$7',
    oldPrice: '$9',
    rating: 3,
    stock: 'In Stock',
    image: PotatoCrunch,
    hoverImage: PotatoCrunchHover,
  },
  {
    id: 14,
    tag: 'New',
    name: 'Tomato Ketchup',
    category: 'New Arrivals',
    price: '$4',
    oldPrice: '$6',
    rating: 4,
    stock: 'In Stock',
    image: TomatoKetchup,
    hoverImage: TomatoKetchupHover,
  },
];
