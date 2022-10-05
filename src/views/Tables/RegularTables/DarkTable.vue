<template>
    <b-card no-body class="bg-default shadow">
        <b-card-header class="bg-transparent border-0">
            <h3 class="mb-0 text-white">Hours</h3>
        </b-card-header>

        <el-table class="table-responsive table table-dark"
                  header-row-class-name="thead-dark"
                  :data="exitUsers">
            <el-table-column label="DNI" min-width="310px" prop="name">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                       
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm text-info">{{row.dni}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>
            <el-table-column label="Fecha" prop="budget" min-width="140px">
                <template v-slot="{row}">
                    <b-media no-body class="align-items-center">
                        <b-media-body>
                            <span class="font-weight-600 name mb-0 text-sm text-info">{{row.date[0]}}</span>
                        </b-media-body>
                    </b-media>
                </template>
            </el-table-column>

            <el-table-column label="Status" min-width="170px" prop="budget" >
                <template v-slot="{row}">
                    <badge class="font-weight-600 name mb-0 text-sm bg-primary text-dark">
                        {{row.type}}
            
                    </badge>
                </template>
            </el-table-column>

            

            
        </el-table>

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
            exitUsers: [],
            currentPage: 1,
            perPage: 5,
        };
    },
    created() {
        axios.get("http://localhost:5000/users/").then((response) => {
            this.users = response.data.users
            this.exitUsers = response.data.users.filter(users => users.type === "Exit")
        })
    }
  }
</script>
