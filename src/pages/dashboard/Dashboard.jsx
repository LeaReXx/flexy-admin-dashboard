import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Navbar from "../../components/navbar/Navbar";
import SideMenu from "../../components/side menu/SideMenu";

export default function Dashboard() {
  const { logOutUser, isLoggedIn } = useAuth();
  const [mobileSideMenu, setMobileSideMenu] = useState(false);

  const toggleMobileSideMenu = () => setMobileSideMenu(!mobileSideMenu);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="bg-[##F6F6F6] flex">
      <SideMenu
        toggleMobileSideMenu={toggleMobileSideMenu}
        mobileSideMenu={mobileSideMenu}
      />
      <main className="w-full">
        <Navbar toggleMobileSideMenu={toggleMobileSideMenu} />
        <div className="m-auto max-w-[1200px] p-4 sm:p-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
          suscipit? Dicta incidunt explicabo, cupiditate nam pariatur facere eos
          laboriosam impedit recusandae necessitatibus? Reiciendis nihil quas
          explicabo et cupiditate ipsum quasi, libero laboriosam dolorum,
          voluptas tenetur provident odit voluptatum minus ex quisquam velit ab
          pariatur eligendi deleniti? Sapiente officiis dolores, sunt molestias
          aperiam natus soluta vitae illum! Et atque, mollitia repudiandae
          debitis sint dolor deleniti animi doloribus aperiam assumenda natus
          minima modi? Qui maxime minima error, atque tenetur iusto laudantium
          blanditiis laborum, deserunt cum vel aspernatur nulla quasi? Itaque ex
          ea ducimus inventore atque perferendis sunt in, sequi vitae beatae
          nobis harum, similique asperiores eligendi quibusdam expedita
          necessitatibus! Repellendus inventore placeat ut non, illo numquam
          excepturi modi ipsa totam cumque explicabo eligendi laudantium
          similique eaque ea harum cum iusto quisquam repudiandae! Voluptatibus
          eveniet dolorem sunt eius doloribus, doloremque pariatur corrupti
          culpa sequi corporis ipsum aliquid praesentium, inventore quibusdam!
          Inventore dolor dolore quam nemo. Consequuntur nostrum reiciendis
          odio. Praesentium voluptate neque cupiditate laborum voluptatibus
          facere, ipsum inventore sunt quod harum mollitia repellendus possimus
          molestias omnis atque at delectus quas unde beatae alias. Maiores,
          sit, quibusdam nobis asperiores, impedit voluptatibus laborum rerum
          doloremque distinctio omnis eveniet possimus totam ullam! Ipsam
          quaerat dicta amet quidem neque! Quaerat ullam soluta maiores iste at
          eos ea eius vel accusantium nihil assumenda quia, exercitationem,
          voluptate minus perferendis iusto tempora consequatur officia culpa?
          Recusandae aliquid laudantium adipisci dolorem, doloremque accusamus
          vel enim excepturi fugiat laborum quas quam molestias, magni dolores.
          Ut, animi suscipit? Soluta nobis nam dolorem eaque tenetur mollitia
          libero tempora aliquid voluptatem nostrum minus necessitatibus illum
          deleniti consequuntur, ducimus, impedit molestiae. Veniam reiciendis
          ut nostrum inventore obcaecati aut recusandae, qui error. Possimus
          facere minus, dicta laudantium consequatur maxime perferendis vitae
          consequuntur iusto officia, necessitatibus accusamus laboriosam
          praesentium ab, iste ullam quasi delectus nemo at itaque ipsa?
        </div>
      </main>
    </div>
  );
}
