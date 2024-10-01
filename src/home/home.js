import React from "react";
import { Container } from "react-bootstrap";
import NavbarApp from "../NavbarApp";
import CarouselSlider from "./CarouselSlider";
import '../styling/Home.css'
import PopularMenu from "./PopularMenu";

const Home = () => {
    return (
        <>
        <NavbarApp />
        <Container fluid className="p-3 px-5 contain">
            <CarouselSlider />
        </Container>
        <PopularMenu />
        </>
    );
};

export default Home;