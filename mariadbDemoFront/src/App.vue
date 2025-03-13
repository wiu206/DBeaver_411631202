<template>
  <div class="container">
    <el-table :data="reservations" border class="table">
      <el-table-column prop="reservation_id" label="預約編號" />
      <el-table-column prop="student.student_id" label="學生編號" />
      <el-table-column prop="student.student_name" label="學生姓名" />
      <el-table-column prop="seat.seat_number" label="座號" />
      <el-table-column prop="seat.row_label" label="行標示" />
      <el-table-column prop="timeslot.start_time" label="開始時間" />
      <el-table-column prop="timeslot.end_time" label="結束時間" />
      <el-table-column prop="create_time" label="創建時間" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Reservation } from './interfaces/Reservations';
import { asyncGet } from './utils/fetch';
import { apis } from './enum/api';
const reservations = ref<Array<Reservation>>([])

onMounted(() => {
  asyncGet(apis.test).then((resp: Array<Reservation>) => {
    reservations.value =  resp.map(reservation => {
    return {
        ...reservation,
        create_time: new Date(reservation.create_time).toLocaleString()
      };
      })
  })
})
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .table {
    width: 80%;
    height: 60%;
  }
}
</style>
