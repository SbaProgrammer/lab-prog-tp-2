const header = document.querySelector("header");

header.innerHTML = `
    <div class="bg-transparent text-white">
        <div class="container mx-auto flex justify-between items-center px-4 py-3">
            <!-- Logo -->
            <a href="/" class="logo font-bold ">King of The South</a>

        <!-- Menu hamburguesa -->
        <button id="menu-toggle" class="md:hidden">
            <i class="bx bx-menu text-3xl text-[#2A2B2A]"></i>
        </button>


        <!-- navegacionn-->
        <nav id="menu" class="navlist hidden md:flex space-x-6">
            <a href="catalogo.html" class="text-[#2A2B2A] font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:text-[#2A2B2A] hover:shadow-md hover:border-b-2 hover:border-[#2A2B2A] hover:bg-opacity-10 hover:bg-[#2A2B2A]">Catálogo</a>
            <a href="contacto.html" class="text-[#2A2B2A] font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:text-[#2A2B2A] hover:shadow-md hover:border-b-2 hover:border-[#2A2B2A] hover:bg-opacity-10 hover:bg-[#2A2B2A]">Sobre Nosotros</a>
            <a href="carrito.html" class="text-[#2A2B2A] font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:text-[#2A2B2A] hover:shadow-md hover:border-b-2 hover:border-[#2A2B2A] hover:bg-opacity-10 hover:bg-[#2A2B2A]">Carrito</a>
        </nav>

        </div>

       <!-- ṕara el celular -->
        <div id="mobile-menu" class="bg-transparent hidden md:hidden">
            <a href="catalogo.html" class="block px-4 py-2 text-[#2A2B2A] font-semibold hover:bg-gray-300">Catálogo</a>
            <a href="contacto.html" class="block px-4 py-2 text-[#2A2B2A] font-semibold hover:bg-gray-300">Sobre Nosotros</a>
            <a href="carrito.html" class="block px-4 py-2 text-[#2A2B2A] font-semibold hover:bg-gray-300">Carrito</a>
        </div>
    </div>
`;

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
