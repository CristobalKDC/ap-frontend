<template >
    <b-card no-body  >
        <b-card-header class="border-0">
            <h3 class="mb-0">Hours</h3>
        </b-card-header >
        

        <el-table class="table-responsive table"
                  header-row-class-name="thead-light"
                  :data="entryUsers"     id="my-table"    :items="entryUsers"  :per-page="perPage"
      :current-page="currentPage"
      small>
            <el-table-column label="DNI" min-width="310px" prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm">{{row.dni}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            
            <el-table-column label="Fecha" prop="budget" min-width="140px" >
                        <template v-slot="{row}">
                            <b-media no-body class="align-items-center">
                                <b-media-body>
                                    <span class="font-weight-600 name mb-0 text-sm">{{row.date[0]}}</span>
                                </b-media-body>
                            </b-media>
                        </template>
            </el-table-column>

            <el-table-column label="Status" min-width="170px" prop="status">
                <template v-slot="{row}">
                    <badge class="font-weight-600 name mb-0 text-sm bg-primary" >
                        {{row.type}}
                       
                    </badge>
                </template>
            </el-table-column>

           

         
        </el-table>

        <b-card-footer class="py-4 d-flex justify-content-end">
            <base-pagination v-model="currentPage" :per-page="5" :total="entryUsers.length"   :items="entryUsers"></base-pagination>
        </b-card-footer>
    </b-card>
</template>
<script>
  import projects from './../projects'
import { Table, TableColumn } from 'element-ui'
import axios from "axios";
  export default {
    name: 'light-table',
    components: {
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
       // console.log(users)
        return {
            projects,
            users: {},
            entryUsers: [],
            currentPage: 1,
            perPage: 5,
        };
    },
    created() {
        axios.get("http://localhost:5000/users/").then((response) => {
            this.users = response.data.users
this.entryUsers = response.data.users.filter(users=>users.type==="Entry")
        })
    }
  }
</script>
