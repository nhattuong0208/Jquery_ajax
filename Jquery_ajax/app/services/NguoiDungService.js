function NguoiDungService(){

    this.layDanhLayNguoiDung = function(){
        return $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/DanhSachNguoiDung",
            type: "GET"
        })
    }

    this.themNguoiDung = function(nguoiDung){
        $.ajax({
            url: "http://svcy.myclass.vn/api/QuanLyTrungTam/ThemNguoiDung",
            type: "POST",
            data: nguoiDung
        })
        .done(function(result){
            if(result === "tai khoan da ton tai !"){
                alert(result);
            }else{
                location.href = ""; 
            }
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.layViTriNguoiDung = function(taiKhoan){
        // var viTri;
        var danhSachNguoiDung = JSON.parse(localStorage.getItem("danhSachNguoiDung"));

        // danhSachNguoiDung.map(function(item , index){
        //     if(item.TaiKhoan === taiKhoan){
        //         viTri = index;
        //         return viTri;
        //     }
        // })

        danhSachNguoiDung.findIndex(function(item){
            return item.TaiKhoan === taiKhoan;
        })
        // return viTri;
    }

    this.layThongTinNguoiDung = function(taiKhoan){
        var danhSachNguoiDung = JSON.parse(localStorage.getItem("danhSachNguoiDung"));
        return danhSachNguoiDung.find(function(item){
            return item.TaiKhoan === taiKhoan;
        })
    }

    this.xoaNguoiDung = function(taiKhoan){
        $.ajax({
            url: `http://svcy.myclass.vn/api/QuanLyTrungTam/XoaNguoiDung/${taiKhoan}`,
            type: "DELETE"
        })
        .done(function(result){
            location.reload();
        })
        .fail(function(err){
            console.log(err);
        })
    }

    this.timKiemNguoiDung = function(chuoiTimKiem){
        var mangTimKiem = []
        var dsnd = JSON.parse(localStorage.getItem("danhSachNguoiDung"));

        dsnd.map(function(item){
            if(item.TaiKhoan.toLowerCase().indexOf(chuoiTimKiem.toLowerCase()) > -1){
                mangTimKiem.push(item);
            }
        })

        return mangTimKiem;
    }
}