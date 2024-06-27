"use client";

import React from "react";
import HeaderBox from "@/components/HeaderBox";
import SearchBar from "@/components/SearchBar";
import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";

const ProductCatalog = () => {
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox />
          <Filter />
        </header>
        <main className="flex flex-wrap gap-4">
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
          <ProductCard
            productName={"Disposable Medical Gloves (White)"}
            retailerName={"Metasys"}
            price={10.9}
            quantity={5}
            category={"Medical Supplies"}
            imageSrc={"/img/glovesWhite.png"}
          />
        </main>
      </div>
    </section>
  );
};

export default ProductCatalog;
