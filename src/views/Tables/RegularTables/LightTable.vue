<template>
    <b-card no-body>
        <b-card-header class="border-0">
            <h3 class="mb-0">Lista de entradas</h3>
        </b-card-header>

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="allUsers">
            <el-table-column  label="ID"
                             min-width="270px"
                             prop="name" >
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                     
                     
                        
                        <b-media-body >
                            
                            <span class="font-weight-600 name mb-0 text-sm" >{{row._id}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <el-table-column label="DNI"
                             prop="budget"
                             min-width="140px">
                    <template v-slot="{row}">
                    <badge class="badge-dot mr-4" >
                       
                        <span  >{{row.dni}}</span>
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Hours"
                             min-width="170px"
                             prop="status">
                <template v-slot="{row}">
                    <badge class="badge-dot mr-4" >
                       
                        <span  >{{row.date}}</span>
                    </badge>
                </template>
            </el-table-column>

            <el-table-column label="Type" min-width="190px">
                <template v-slot="{row}">
                <div >
                    <p >
                        {{row.type}}
                    </p>
                    
                </div>
            </template>
            </el-table-column>

            
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end" >
            <base-pagination v-model="currentPage" :per-page="3" :total="allUsers.length" aria-controls="my-table" ></base-pagination>
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
      this.users = response.data.users
      this.allUsers = response.data.users.filter(user=> user.type.includes('Entry'))})
      
    },
    data() {
        return {
            users: [],
            allUsers: [],
            currentPage: 1
        }
    }

  }


</script>
