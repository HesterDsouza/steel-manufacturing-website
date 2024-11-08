import InfoCard from "../../components/infoCard/InfoCard";
import "./productsAndTechnologyPage.css"

const ProductsAndTechnologyPage = () => {
  
  const products = [
    {
      title: "Railings",
      images: ["/pdf-images/railings/railing1.JPG","/pdf-images/railings/railing2.JPG","/pdf-images/railings/railing3.JPG","/pdf-images/railings/railing4.JPG","/pdf-images/railings/railing5.JPG","/pdf-images/railings/railing6.JPG","/pdf-images/railings/railing7.JPG","/pdf-images/railings/railing8.JPG","/pdf-images/railings/railing9.JPG","/pdf-images/railings/railing10.JPG","/pdf-images/railings/railing11.JPG","/pdf-images/railings/railing12.JPG","/pdf-images/railings/railing13.JPG","/pdf-images/railings/railing14.JPG", "/pdf-images/railings/railing15.JPG"],
      description: [
        "Black metal railings of a white spiral staircase, showcasing a modern and elegant design.",
        "Intricate metal railings of a stairway featuring geometric designs, showcasing modern craftsmanship and artistic detail.",
        "Black metal railings of a spiral staircase, showcasing intricate designs and a sleek, modern aesthetic.",
        "White railings and handrails line a stairway, providing safety and a clean aesthetic to the space.",
        "Elegant white paper railings of a spiral staircase, showcasing intricate design and delicate craftsmanship.",
        "Metal railings line a stairway, providing support and safety as one ascends or descends.",
        "Sleek black railings encircle a modern glass spiral staircase, enhancing its elegant design and open feel.",
        "Elegant white railings of a spiral staircase, enhancing the light-filled room.",
        "Close-up of a sleek metal railing on a wooden staircase, showcasing its modern design and sturdy construction.",
        "Intricate paper railings of a spiral staircase, showcasing delicate craftsmanship and unique design elements.",
        "Elegant railings of a spiral staircase, enhancing the room's ambiance.",
        "Wooden stairway with a white wall, featuring elegant railings that enhance the overall aesthetic of the space.",
        "Elegant white paper railings of a spiral staircase, showcasing intricate design and delicate craftsmanship.",
        "A metal railing on a staircase, showcasing its sleek design against the wooden steps.",
        "A close-up of a stair railing featuring a modern geometric design, showcasing intricate patterns and lines.",
      ]
    },
    {
      title: "Canopies",
      images: ["/pdf-images/canopies/canopy1.JPG","/pdf-images/canopies/canopy2.JPG","/pdf-images/canopies/canopy3.JPG","/pdf-images/canopies/canopy4.JPG","/pdf-images/canopies/canopy5.JPG","/pdf-images/canopies/canopy6.JPG","/pdf-images/canopies/canopy7.JPG","/pdf-images/canopies/canopy8.JPG","/pdf-images/canopies/canopy9.JPG","/pdf-images/canopies/canopy10.JPG","/pdf-images/canopies/canopy11.JPG","/pdf-images/canopies/canopy12.JPG","/pdf-images/canopies/canopy13.JPG","/pdf-images/canopies/canopy14.JPG"],
      description: [
        "A modern Nespresso kiosk showcasing coffee machines and capsules with prominent branding and a decorative coffee-themed wall.", 
        "A rectangular, open café kiosk with a wooden structure, metal grids, hanging lights, and seating around a counter.",
        "McCafé kiosk with wood and yellow accents, featuring a pastry display, cash register, and promotional signage in a sleek, modern setup.",
        "A functional, partially open wooden booth with vertical slats and a counter, under construction in an industrial space.",
        "Minimalistic coffee bar with wood and black metal elements, showcasing coffee bags on shelves and a premium atmosphere.",
        "A stylish wooden booth for Peek Freans with pendant lights, a counter, and promotional signs, ideal for events or exhibitions.",
        "A food kiosk with wooden paneling, a glass display for food items, and a rustic brick and framed art back wall.",
        "Outdoor juice kiosk with green and beige colors, wooden paneling, fresh fruit displays, and a blender for fresh juice preparation.",
        "A sleek juice stand with colorful signage, menu boards, and fresh fruit imagery, offering an inviting space for customers.",
        "Small coffee booth with a wooden counter, metal accents, and product display areas, optimized for efficient customer interaction.",
        "Sleek trade show booth with black and wooden elements, showcasing branded products and a small seating area for visitor engagement.",
        "Compact bagel kiosk with a wood-metal blend and a display case for food items, ideal for high-traffic public areas.",
        "Coffee kiosk with wooden and black elements and featuring cozy seating, coffee displays, and decorative blackboard art.",
        "A wooden and black metal food kiosk with glass panels, Arabic text design, and warm yellow lighting for an inviting ambiance.",
      ]
    },
    {
      title: "Table Furniture",
      images: ["/pdf-images/tables/table1.JPG","/pdf-images/tables/table2.JPG","/pdf-images/tables/table3.JPG","/pdf-images/tables/table4.JPG","/pdf-images/tables/table5.JPG","/pdf-images/tables/table7.JPG","/pdf-images/tables/table8.JPG","/pdf-images/tables/table9.JPG","/pdf-images/tables/table17.JPG","/pdf-images/tables/table18.JPG","/pdf-images/tables/table20.JPG","/pdf-images/tables/table21.JPG","/pdf-images/tables/table24.JPG"],
      description: [
        "A metal table featuring a modern geometric design, showcasing intricate patterns and a sleek finish.",
        "A round metal table featuring a smooth wooden top, blending modern and rustic design elements.",
        "A black metal shelf supporting a wooden shelf, showcasing a modern and industrial design aesthetic.",
        "A black metal stand featuring four sturdy shelves for versatile storage and display options.",
        "Wodden table with unique steel bar suspensions design",
        "A wooden nightstand featuring two drawers, elegantly designed for bedside storage and organization.",
        "A triangular glass table with a sleek metal frame, showcasing modern design and elegance in a contemporary setting.",
        "Intricate table and seats stainless steel model",
        "A stylish black metal table with a durable metal frame, perfect for enhancing modern interior spaces.",
        "An artistic wooden sculpture complemented by a wire hanging, highlighting the blend of natural and crafted elements.",
        "Industrial-style cabinet featuring two solid doors and one glass door, showcasing a blend of functionality and modern design.",
        "Modern shelf featuring a black metal and wood finish, supported by two elegant metal triangles for a unique aesthetic.",
        "Modern glass and metal side table adorned with a stylish vase, enhancing the aesthetic of the living space."
      ]
    },
    {
      title: "Racks",
      images: ["/pdf-images/racks/rack1.JPG","/pdf-images/racks/rack2.JPG","/pdf-images/racks/rack3.JPG","/pdf-images/racks/rack4.JPG","/pdf-images/racks/rack5.JPG","/pdf-images/racks/rack6.JPG"],
      description: [
        "Sturdy metal rack for displaying a motorcycle, emphasizing its design and enhancing showroom appeal.", 
        "A blue metal shelf featuring three sturdy shelves for storage and organization.",
        "A sturdy metal display stand featuring three spacious shelves for showcasing various items.",
        "Metal display stand with multiple shelves, designed for showcasing products in a retail environment.",
        "A blue and orange metal display stand positioned in front of a building, showcasing its vibrant colors and design.",
        "Metal display stand with white and yellow shelves, showcasing products in an organized and visually appealing manner.",
      ]
    },
    {
      title: "Chair Furniture",
      images: ["/pdf-images/chairs/chair1.JPG", "/pdf-images/chairs/chair2.JPG", "/pdf-images/chairs/chair3.JPG", "/pdf-images/chairs/chair4.JPG","/pdf-images/chairs/chair5.JPG","/pdf-images/chairs/chair7.JPG","/pdf-images/chairs/chair8.JPG","/pdf-images/chairs/chair9.JPG","/pdf-images/chairs/chair10.JPG","/pdf-images/chairs/chair11.JPG","/pdf-images/chairs/chair12.JPG","/pdf-images/chairs/chair13.JPG","/pdf-images/chairs/chair14.JPG","/pdf-images/chairs/chair15.JPG","/pdf-images/chairs/chair16.JPG"],
      description: [
        "Sleek metal stool featuring a modern black seat, perfect for contemporary spaces and versatile seating options.",
        "Sturdy black metal bench featuring a chain, highlighting its robust design and potential for public use.",
        "Cozy outdoor seating arrangement with two benches flanking a central table, perfect for socializing.",
        "Metal-framed bench with a wooden seat, perfect for parks or gardens, offering a blend of durability and comfort.",
        "Table accompanied by two chairs, positioned within a garage setting.",
        "An elegant bench featuring a combination of iron and wood, highlighting strength and aesthetic appeal in outdoor settings.",
        "Stylish stool with a wooden seat and durable metal legs, perfect for adding seating to any space.",
        "Sturdy bench crafted from wood and metal, showcasing a blend of natural and industrial design elements.",
        "Contemporary chair with a stylish curved back and a plush white cushion, ideal for adding elegance to any space.",
        "Wooden chair featuring a sleek black frame and seat, showcasing a modern and minimalist design.",
        "Stylish chair with a wooden seat and contrasting black legs, perfect for contemporary interior decor.",
        "Pair of stylish wooden bar stools with sturdy metal legs, ideal for contemporary dining spaces.",
        "A sleek bench featuring a wooden seat and metal frame, perfect for outdoor relaxation and contemporary aesthetics.",
        "Elegant black and gold chair with a wooden base, combining luxury and comfort for any living space.",
        "Stylish bench featuring a metal frame, decorated with lush plants for a vibrant outdoor ambiance.",
      ]
    },
    {
      title: "Decorative Panels",
      images: ["/pdf-images/decorative-panels/deco-panel1.JPG","/pdf-images/decorative-panels/deco-panel2.JPG","/pdf-images/decorative-panels/deco-panel3.JPG","/pdf-images/decorative-panels/deco-panel4.JPG","/pdf-images/decorative-panels/deco-panel5.JPG","/pdf-images/decorative-panels/deco-panel6.JPG"],
      description: [
        "Brown metal panel with a sleek design, suitable for outdoor or architectural use, adding a warm aesthetic.", 
        "Large brown metal panel, designed with durability and style, ideal for industrial or decorative purposes.",
        "Brown-toned metal panel with a modern frame, fitting for outdoor settings or architectural decor.",
        "Stacked brown metal panels, perfect for indoor installations or artistic architectural features.",
        "Neatly arranged brown metal panels, showcasing a rugged finish, suitable for factory or exterior decor.",
        "Black metal panel with a contemporary look, ideal for modern indoor or outdoor architectural use.",
      ]
    },
  ];

  const techs = [
    {
      image: "/tech/lazer-cutting-machine1.jpg",
      title: "Compact Precision Laser Cutter",
      description: "A compact, high-precision cutter with a front control panel for intricate work on smaller components across industries."
    },
    {
      image: "/tech/lazer-cutting-machine2.jpg",
      title: "Heavy-Duty Laser Cutter",
      description: "An open-structure laser cutter for large steel sheets, ideal for extensive cutting in manufacturing and construction."
    },
    {
      image: "/tech/lazer-welding-machine1.jpg",
      title: "Touchscreen Laser Welder",
      description: "A modern, touchscreen-enabled welder with precise controls, designed for high-accuracy welding in automotive and aerospace sectors."
    },
    {
      image: "/tech/lazer-welding-machine2.jpg",
      title: "Multi-functional Laser Welding System",
      description: "Versatile, large-scale laser welder with extensive controls, ideal for complex, high-volume industrial welding tasks."
    },
    {
      image: "/tech/hyraulic-press-bending-machine.jpg",
      title: "Hydraulic Press Bending Machine",
      description: "Powerful hydraulic press for shaping sheet metal, with multiple clamps for precise, repeatable bending."
    },
    {
      image: "/tech/metal-shearing-machine1.jpg",
      title: "Industrial Metal Shearing Machine",
      description: "Heavy-duty shearing machine with precision blades, essential for accurate cutting in metal fabrication."
    },
    {
      image: "/tech/thread-rolling-machine1.jpg",
      title: "Industrial Thread-Rolling Machine",
      description: "Creates threads on cylindrical parts using durable rollers, powered by a motorized system for consistent results."
    },
    {
      image: "/tech/conveyor-system1.jpg",
      title: "Industrial Conveyor System",
      description: "Metal conveyor with motorized drive and safety ladder, facilitating efficient material handling in production."
    },
    {
      image: "/tech/fuel-filteration-pumping-machine1.jpg",
      title: "Filtration and Pumping System",
      description: "Red cabinet housing filtration and pumping components, essential for fluid management in industrial processes."
    }
];

  return (
    <div className="productsAndTechnologyPage">
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="cards-container">
          {products.map((product, index) => (
            <InfoCard 
            key={index}
            title={product.title}
            images={product.images}
            description={product.description}
            class_name="products"
          />
          ))}
        </div>
      </section>
      <section className="tech-section">
        <h2>Our Technology</h2>
        <div className="cards-container">
        {techs.map((tech, index) => (
            <div key={index} className="card">
              <img src={tech.image} alt={tech.title} className="card-img"/>
              <div className="card-content">
                <h3>{tech.title}</h3>
                <p>{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductsAndTechnologyPage