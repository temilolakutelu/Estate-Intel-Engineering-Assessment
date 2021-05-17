<template>
  <div id="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>Project Name</th>
          <th>Developer</th>
          <th>Main Contractor</th>
          <th>Area</th>
          <th>State</th>
          <th>Status <span class="status-arrow">&#x25BE;</span></th>
          <th>Sector</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row,ix) in table_data"
          v-bind:key='ix'
        >
          <td class="sticky-col">{{row.project_name}}</td>
          <td>{{row.developer}}</td>
          <td>{{row.main_contractor}}</td>
          <td>{{row.region}}</td>
          <td>{{row.state}}</td>
          <td><span>{{row.status}}</span></td>
          <td>{{row.sector}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from "@/db.json"
export default {
  name: "Table",
  data () {
    return {
      table_data: []
    }
  },
  mounted () {
    // this.table_data = data.data;
    // console.log(this.table_data)
    this.getProjects()
  },
  methods: {
    getProjects () {
      var req = {
        what: "tabledata"
      };
      this.$request
        .makeGetRequest(req)
        .then(response => {
          this.table_data = response.data
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped lang="scss">
body {
  font: 14px Calibri;
}
#table-wrapper {
  width: 100%;
  float: left;
  overflow-x: scroll;
  padding-bottom: 1px;
}
table {
  background-color: white;
  border-width: 0 1px 1px 1px;
  border-radius: 5px;
  border-collapse: separate;
  border-spacing: 0;
  display: table;
  overflow: auto;
  border: 1px solid #f6fafd;
  width: 100%;
  thead {
    th {
      color: white;
      background-color: #28394b;
      font-weight: bold;
      font-size: 14px;
      padding: 20px;
      text-align: left;
      &:first-child {
        border-top-left-radius: 5px;
      }
      &:last-child {
        border-top-right-radius: 5px;
      }
    }
    tr {
      th {
        &:first-child {
          border-right: 2px solid #eaeeef00;
          box-shadow: 7px 0px 7px -4px #eaeeef12;
          position: sticky;
          left: 0;
          width: 4em;
          z-index: 11;
        }
      }
    }
  }
  tbody {
    td {
      color: #505d66;
      text-align: left;
      padding: 20px;
      font-size: 14px;
    }
    tr {
      &:nth-child(odd) {
        background-color: #f6fafd;
      }
      &:nth-child(even) {
        background: #fff;
      }
      td {
        &:first-child {
          border-right: 1px solid #eaeeef;
          box-shadow: 7px 0px 7px -4px #eaeeef;
          font-weight: bold;
          position: sticky;
          left: 0;
          width: 5em;
          z-index: 9999;
          background: inherit;
        }
        &:nth-child(6) {
          span {
            background: #fde1af;
            color: #85601c;
            font-weight: 600;
            padding: 4px 6px;
            border-radius: 3px;
          }
        }
      }
    }
  }
}
td {
  white-space: nowrap;
}
th {
  white-space: nowrap;
}
.status-arrow {
  margin-left: 10px;
}
</style>
