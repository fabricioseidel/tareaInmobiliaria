const propiedades_alquiler = [
  {
    nombre: "Casa de campo",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion: "Tenebroso y embrujado",
    ubicacion: "n/n florida avenue, the manzano, CA 91487",
    habitaciones: "9",
    costo: "0.1",
    smoke: true,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3",
    banos: "3",
    costo: "2.500",
    Fumar: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2",
    banos: "2",
    costo: "2.200",
    Fumar: false,
    Mascota: false,
  },
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2",
    banos: "2",
    costo: "2.000",
    Fumar: false,
    Mascota: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: "3",
    banos: "3",
    costo: "2.500",
    Fumar: true,
    Mascota: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2",
    banos: "2",
    costo: "2.200",
    Fumar: false,
    Mascota: false,
  },
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2",
    banos: "2",
    costo: "2.000",
    Fumar: false,
    Mascota: true,
  },
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: "2",
    banos: "2",
    costo: "2.000",
    Fumar: false,
    pets: true,
  },
];

const arriendo = document.getElementById("alquiler");
for (let alquiler of propiedades_alquiler) {
  arriendo.innerHTML += `
  <div class="col-md-4 mb-4">
  <div class="card">
    <img  src=${
      alquiler.src
    }  class="card-img-top" alt="Imagen del departamento" />
    <div class="card-body">
      <h5 class="card-title">${alquiler.nombre}</h5>
      <p class="card-text">${alquiler.descripcion}</p>
      <p>
        <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
      </p>
      <p>
        <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i> ${alquiler.banos} Baños
      </p>
      <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
      ${
        alquiler.smoke
          ? '<p class="text-success"> <i class="fas fa-smoking"></i> Permitido fumar </p>'
          : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
      }
      ${
        alquiler.pets
          ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
          : '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'
      }
    </div>
  </div>
</div>`;
}
