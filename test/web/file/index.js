
let Media = new BaaS.TableObject('test_media')

let masterFileID = '5a2fe93308443e313a428c4f'
let mediaRecordID = '5a2fbaef08443e70d5dbe1cc'
let fileCategoryID = '5a377bb009a8054139faafed' // 图片
let fileID = '5a3b4d9bfff1d66ab886dfc2'
let fileID_1 = ''
let fileID_2 = ''

const defaultCateList = [{
  name: '全部',
  id: 'all',
}]

const sortKeyList = [{
  name: 'name',
  value: 'name',
}, {
  name: '-name',
  value: '-name',
}, {
  name: 'size',
  value: 'size',
}, {
  name: '-size',
  value: '-size',
}, {
  name: 'created_at',
  value: 'created_at',
}, {
  name: '-created_at',
  value: '-created_at',
}]

function init() {
  new Vue({
    el: '#root',
    data() {
      return {
        selectedCateID: 'all',
        selectedCateName: '全部',
        cateLimit: 10,
        cateOffset: 0,
        cateSortKey: '',
        limit: 10,
        offset: 0,
        sortKey: '',
        cateList: defaultCateList,
        fileList: [],
        selectedFileList: [],
        sortKeyList: sortKeyList,
      }
    },
    watch: {
      cateLimit() {
        this.getFileCategoryList()
      },
      cateOffset() {
        this.getFileCategoryList()
      },
      limit() {
        this.getFileList()
      },
      offset() {
        this.getFileList()
      },
    },
    methods: {
      handleModifyNum(type, num) {
        this[type] += num
      },

      getFileCategoryList() {
        const MyFileCategory = new BaaS.FileCategory()
        const {cateSortKey: sortKey, cateLimit: limit, cateOffset: offset} = this

        return MyFileCategory.limit(limit).offset(offset).orderBy(sortKey).find()
          .then(res => {
            this.cateList = defaultCateList.concat(res.data.objects)
          })
          .catch(err => console.log(err))
      },

      getFileList() {
        const File = new BaaS.File()
        const query = new BaaS.Query()
        const {sortKey, limit, offset} = this
        const id = this.selectedCateID
        query.compare('category_id', '=', id)

        if (id !== 'all') File.setQuery(query)
        return File.limit(limit).offset(offset).orderBy(sortKey).find()
          .then(res => {
            this.fileList = res.data.objects
          })
          .catch(err => console.log(err))
      },

      uploadFile(file, metaData) {
        return new Promise((resolve, reject) => {
          let File = new BaaS.File()
          let fileParams = {fileObj: file}

          File.upload(fileParams, this.selectedCateID !== 'all' ? metaData : null).then((res) => {
            let data = res.data.file
            console.log(data)
            setTimeout(resolve, 1000)
            // showSuccessToast()
            notice.alert({type: 1, text: '上传成功'})
          }, (err) => {
            reject(err)
            // showFailToast()
            notice.alert({type: 3, text: '上传失败'})
          })
        })
      },

      uploadFileUseCateName(e) {
        this.uploadFile(e.target.files[0], {categoryName: this.selectedCateName})
          .then(() => {
            return this.getFileList()
          }).then(res => {})
      },

      uploadFileUseCateID(e) {
        this.uploadFile(e.target.files[0], {categoryID: this.selectedCateID})
          .then(() => {
            return this.getFileList()
          }).then(res => {})
      },

      deleteFileArray(ids) {
        let File = new BaaS.File()
        return File.delete(ids).then((res) => {
          notice.alert({type: 1, text: '成功'})
        }, (err) => {
          console.log(err)
          notice.alert({type: 3, text: '失败'})
        })
      },

      handleDeleteSelectedFile() {
        const {selectedFileList} = this
        if (!selectedFileList.length) return

        this.deleteFileArray(selectedFileList).then(() => {
          return this.getFileList()
        }).then()
      },

      deleteFileSigle(id) {
        let File = new BaaS.File()
        return File.delete(id).then((res) => {
          notice.alert({type: 1, text: '删除成功'})
        }, (err) => {
          console.log(err)
          notice.alert({type: 3, text: '删除失败'})
        })
      },

      getFileDetail: function() {
        if (!this.fileList.length) return
        let File = new BaaS.File()
        File.get(this.fileList[0].id).then((res) => {
          notie.force(3, JSON.stringify(res.data), 'OK')
        }, (err) => {
          notice.alert({type: 3, text: '失败'})
        })
      },

      getFileCategoryDetail: function() {
        let fileCategory = new BaaS.FileCategory()
        fileCategory.get(this.data.cateList[1].id).then((res) => {
          notice.force(3, JSON.stringify(res.data), 'OK')
        }, err => {
          notice.alert({type: 3, text: '失败'})
        })
      },

      getFileListFromCategory: function() {
        let fileCategory = new BaaS.FileCategory()
        fileCategory.getFileList(this.cateList[1].id).then((res) => {
          notice.force(3, JSON.stringify(res.data))
        }, err => {
          notice.alert({type: 3, text: '失败'})
        })
      },
    }
  })
}

window.addEventListener('load', init)