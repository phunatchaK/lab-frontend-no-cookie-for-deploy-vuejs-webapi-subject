<template>
  <div v-for="(pd, pdId) in products" :key="pdId" class="mt-5">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="card mx-auto mb-3" style="width: 18rem">
          <img
            :src="`http://localhost:3000/img_pd/${pd.pdId}.jpg`"
            alt=""
            class="rounded shadow-sm"
          />
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <table class="table">
          <tbody>
            <tr class="table-secondary">
              <td>
                <h4>{{ pd.pdId }}</h4>
              </td>
              <td>
                <h4>{{ pd.pdName }}</h4>
              </td>
            </tr>
            <tr>
              <td><h5>ราคา</h5></td>
              <td>
                <h5>{{ pd.pdPrice }}</h5>
              </td>
            </tr>
            <tr>
              <td><h5>ยี่ห้อ</h5></td>
              <td>
                <h5>{{ pd.brand.brandName }}</h5>
              </td>
            </tr>
            <tr>
              <td><h5>รายละเอียด</h5></td>
              <td>
                <h5>{{ pd.pdRemark }}</h5>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- สร้างปุ่มเพื่อทำการนำสินค้าลงตะกร้า เรียก function chkLogin -->
        <button class="btn btn-primary">
          <i class="bi bi-cart lead"></i> ใส่ตะกร้า&nbsp;
        </button>
        <button class="btn btn-warning float-end">
          <i class="bi bi-pencil-fill lead"></i> แก้ไข&nbsp;&nbsp;
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.withCredentials = true;


export default {
  name: "ProductShow",
  data() {
    return {
      products: [], //array เก็บข้อมูลสินค่า
      id: null, // รหัสสินค้าที่ส่งมา
    };
  },
  mounted() {
    // อ่านค่าจะ parameter ที่ส่งมาจาก routes
    this.id = this.$route.params.pdId;
    // ระบุ id ของสินค้าที่ต้องการ
    // ระบุ Request ไปที่ Backend ตามที่ Backend กำหนด
    axios
      .get(`http://localhost:3000/products/${this.id}`)
      .then((res) => {
        this.products = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
  methods: {

  },
};
</script>
<style></style>
