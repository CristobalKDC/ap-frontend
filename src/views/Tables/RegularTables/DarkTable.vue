<template>
    <b-card no-body class="bg-default shadow">
        <b-card-header class="bg-transparent border-0">
            <h3 class="mb-0 text-white">Lista de salidas</h3>
        </b-card-header>

        <el-table class="table-responsive table table-dark"
                  header-row-class-name="thead-dark"
                  :data="exitUsers">
            <el-table-column label="ID"
                             min-width="270px"
                             prop="name">
                <template v-slot="{row}">
                   
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-info">{{row._id}}</span>
                        </b-media-body>
                    
                </template>
            </el-table-column>
            

            <el-table-column label="DNI"
                             min-width="140px"
                             prop="status">
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4 text-info">
                       
                        <span >{{row.dni}}</span>
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Hours" min-width="170px">
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4 text-info" >
                       
                        <span  >{{row.date}}</span>
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Type"
                             prop="completion"
                             min-width="190px">
                <template v-slot="{row}">
                    <div >
                        <p class="text-info">{{row.type}}</p>
                        
                    </div>
                </template>
            </el-table-column>
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end" >
            <base-pagination v-model="currentPage" :per-page="3" :total="exitUsers.length" aria-controls="my-table" ></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>

  import axios from 'axios';
  import { Table, TableColumn} from 'element-ui'

  const recuperarDatosAdmin = () => {
            const recuperarDatos = JSON.parse(localStorage.getItem('DatosUsuario'));
            if (recuperarDatos && recuperarDatos.token) {
                return [recuperarDatos.token, recuperarDatos.userId];
            }
        };

  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    created() {
        
    axios.defaults.headers = { Authorization: 'Bearer ' + recuperarDatosAdmin()[0]};
    axios.get("http://localhost:5000/users/").then ((response) => {
      this.users = response.data.users,
      this.exitUsers = response.data.users.filter(user=> user.type.includes('Exit'))});
      
    },
    data() {
      return {
        exitUsers: [],
        currentPage: 1
      };
    }
  }
</script>
