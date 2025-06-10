import React from "react";
import { Button } from "react-bootstrap";
// import Logo from "/31and32r react/MyReactProject/ReactProject/src/assets/Logo.png"

const LostItemsSection = ({ setCatSection, setFilData }) => {
  //      const HandleValue = (value) => {
  //     // console.log(value)

  //     setCategoryValue(value)
  //   };

  const HandletwoCategory = (CatValue2) => {
    // setOpen(false);
    setCatSection(CatValue2);
    // setToggle(true)
  };

  const HandleCategory = (CatValue) => {
    setFilData(CatValue);
  };

  return (
    <div className="scroll-container">
      <h5 className="scroll-title">Found-Items-Category</h5>
      <div className="scroll-buttons" style={{ display: "flex" }}>
        <div>
          <Button onClick={() => HandleCategory("electronics")}>
            <img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437105.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
     {/* <img style={{width:"50px", marginBottom:"30px"}}  src={Logo} alt="" /> */}
          </Button>
         
          <p><span id="catText">Mobiles</span></p>
        </div>

        <div>
          <Button onClick={() => HandleCategory("documents")}>
            <img src="https://img.freepik.com/premium-vector/document-icon-paper-documents-folder-with-signature-text_399089-266.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
          </Button>
          <p><span id="catText">Documents</span></p>
        </div>

        {/* <Button onClick={() => HandletwoCategory("Mobiles")}>Mobiles</Button> */}
        <div>
          <Button onClick={() => HandleCategory("Bags")}>
            <img src="https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_1203-7655.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
          </Button>
          <p> <span id="catText">Bags</span></p>
        </div>
        <div>
          <Button onClick={() => HandleCategory("wallets")}>
            <img src="https://img.freepik.com/free-photo/still-life-assortment-with-cryptocurrency_23-2149102066.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
          </Button>
          <p><span id="catText">Wallets</span></p>
        </div>
        <div>
          <Button onClick={() => HandleCategory("laptops")}>
            <img src="https://img.freepik.com/free-vector/laptop-concept-illustration_114360-24409.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
          </Button>
          <p><span id="catText">Laptops</span></p>
        </div>

        <div>
          <Button onClick={() => HandleCategory("jewellery")}>
            <img src="https://img.freepik.com/free-vector/jewelry-accessories-realistic-set_1284-16770.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
          </Button>
          <p><span id="catText">Jewellery</span></p>
        </div>

        <div>
          <Button onClick={() => HandleCategory("earbuds")}>
           <img src="https://img.freepik.com/free-vector/headphones-realistic-set_1284-26322.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
          </Button>
          <p><span id="catText">EarBuds</span></p>
        </div>
        <div>
          <Button onClick={() => HandleCategory("Books")}>
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
          </Button>
          <p><span id="catText">Books</span></p>
        </div>
        <div>
          <Button onClick={() => HandleCategory("accessories")}>
            <img src="https://img.freepik.com/free-photo/still-life-teenager-s-desk_23-2149371274.jpg?ga=GA1.1.1112550859.1741454000&semt=ais_hybrid&w=740" alt="" />
          </Button>
          <p><span id="catText">Accessories</span></p>
        </div>
        <div>
          <Button onClick={() => HandleCategory("otherItems")}>
            <img src="data:image/png;base64,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" alt="" />
          </Button>
          <p><span id="catText">OtherItems</span></p>
        </div>
        <div>
          <Button id="All" onClick={() => HandleCategory("All")}>
            All
          </Button>
          <p><span id="catText"></span></p>
        </div>
      </div>
    </div>
  );
};

export default LostItemsSection;
