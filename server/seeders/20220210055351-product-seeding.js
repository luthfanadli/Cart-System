'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'White T-Shirt',
        price: 200000,
        imgUrl: 'https://media.istockphoto.com/photos/blank-back-of-white-tshirt-with-clipping-path-picture-id482949785?k=20&m=482949785&s=612x612&w=0&h=vrLpCgFRiutShCuKsDTpz4ESzXJglkVNoYi29j0CiK0=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Black T-Shirt',
        price: 200000,
        imgUrl: 'https://media.istockphoto.com/photos/blank-black-tshirt-front-with-clipping-path-picture-id483425141?k=20&m=483425141&s=612x612&w=0&h=L3nzMZItJ2SWuDFZBgrMoC7s4Ze8ETi-cjTI3-jL_Ls=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Leather Jacket',
        price: 700000,
        imgUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sport Jacket',
        price: 500000,
        imgUrl: 'https://media.istockphoto.com/photos/blue-sports-jacket-isolated-on-white-background-picture-id1352133712?k=20&m=1352133712&s=612x612&w=0&h=xKdU4zegT3eGkPG9-4Mekx2m9twRyqAzU0jBeksW09g=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Winter Jacket',
        price: 800000,
        imgUrl: 'https://media.istockphoto.com/photos/blue-sport-winter-jacket-isolated-on-white-warm-clothes-picture-id1342121693?k=20&m=1342121693&s=612x612&w=0&h=_fRRlEjM_LVaLgVtLHpFOuUkcloPR1L9d-i5x1FjIc4=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Brown Sweater',
        price: 350000,
        imgUrl: 'https://media.istockphoto.com/photos/sweater-yellow-color-isolated-on-whitetrendy-womens-clothingknitted-picture-id1278802435?k=20&m=1278802435&s=612x612&w=0&h=5Zn7XJcTVmCxSyDtkdHOr5OE0jsrafaQDlaS0_Hr0Pc=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Short Sleeves Shirt',
        price: 400000,
        imgUrl: 'https://media.istockphoto.com/photos/mens-shirt-isolated-on-white-background-picture-id864522810?k=20&m=864522810&s=612x612&w=0&h=ZK25xiNs75V4kmf2ztJ_sxsr6-N7CU3KuJxMNYYD2SY=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'White Polo Shirt',
        price: 300000,
        imgUrl: 'https://media.istockphoto.com/photos/blank-white-polo-shirt-mockup-front-view-picture-id1278597419?k=20&m=1278597419&s=612x612&w=0&h=jH8d1tEvDL5_imOKVnSyRDiyr62z5Ug7OIamYfMizrw=',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products')
  }
};
