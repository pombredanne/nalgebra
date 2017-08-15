initSidebarItems({"mod":[["allocator","Abstract definition of a matrix data storage allocator."],["constraint","Compatibility constraints between matrix shapes, e.g., for addition or multiplication."],["coordinates","Structures to which matrices and vector can be auto-dereferenced (through `Deref`) to access components using their names. For example, if `v` is a 3D vector, one can write `v.z` instead of `v[2]`."],["default_allocator","The default matrix data storage allocator."],["dimension","Traits and tags for identifying the dimension of all algebraic entities."],["iter","Matrix iterators."],["storage","Abstract definition of a matrix data storage."]],"struct":[["Matrix","The most generic column-major matrix (and vector) type."],["MatrixArray","A array-based statically sized matrix data storage."],["MatrixVec","A Vec-based matrix data storage. It may be dynamically-sized."],["SliceStorage","A matrix data storage for a matrix slice. Only contains an internal reference to another matrix data storage."],["SliceStorageMut","A mutable matrix data storage for mutable matrix slice. Only contains an internal mutable reference to another matrix data storage."],["Unit","A wrapper that ensures the undelying algebraic entity has a unit norm."]],"trait":[["Scalar","The basic scalar type for all structures of `nalgebra`."],["SliceRange","A range with a size that may be known at compile-time."]],"type":[["DMatrix","A dynamically sized column-major matrix."],["DVector","A dynamically sized column vector."],["Matrix1","A stack-allocated, column-major, 1x1 square matrix."],["Matrix1x2","A stack-allocated, column-major, 1x2 square matrix."],["Matrix1x3","A stack-allocated, column-major, 1x3 square matrix."],["Matrix1x4","A stack-allocated, column-major, 1x4 square matrix."],["Matrix1x5","A stack-allocated, column-major, 1x5 square matrix."],["Matrix1x6","A stack-allocated, column-major, 1x6 square matrix."],["Matrix2","A stack-allocated, column-major, 2x2 square matrix."],["Matrix2x1","A stack-allocated, column-major, 2x1 square matrix."],["Matrix2x3","A stack-allocated, column-major, 2x3 square matrix."],["Matrix2x4","A stack-allocated, column-major, 2x4 square matrix."],["Matrix2x5","A stack-allocated, column-major, 2x5 square matrix."],["Matrix2x6","A stack-allocated, column-major, 2x6 square matrix."],["Matrix3","A stack-allocated, column-major, 3x3 square matrix."],["Matrix3x1","A stack-allocated, column-major, 3x1 square matrix."],["Matrix3x2","A stack-allocated, column-major, 3x2 square matrix."],["Matrix3x4","A stack-allocated, column-major, 3x4 square matrix."],["Matrix3x5","A stack-allocated, column-major, 3x5 square matrix."],["Matrix3x6","A stack-allocated, column-major, 3x6 square matrix."],["Matrix4","A stack-allocated, column-major, 4x4 square matrix."],["Matrix4x1","A stack-allocated, column-major, 4x1 square matrix."],["Matrix4x2","A stack-allocated, column-major, 4x2 square matrix."],["Matrix4x3","A stack-allocated, column-major, 4x3 square matrix."],["Matrix4x5","A stack-allocated, column-major, 4x5 square matrix."],["Matrix4x6","A stack-allocated, column-major, 4x6 square matrix."],["Matrix5","A stack-allocated, column-major, 5x5 square matrix."],["Matrix5x1","A stack-allocated, column-major, 5x1 square matrix."],["Matrix5x2","A stack-allocated, column-major, 5x2 square matrix."],["Matrix5x3","A stack-allocated, column-major, 5x3 square matrix."],["Matrix5x4","A stack-allocated, column-major, 5x4 square matrix."],["Matrix5x6","A stack-allocated, column-major, 5x6 square matrix."],["Matrix6","A stack-allocated, column-major, 6x6 square matrix."],["Matrix6x1","A stack-allocated, column-major, 6x1 square matrix."],["Matrix6x2","A stack-allocated, column-major, 6x2 square matrix."],["Matrix6x3","A stack-allocated, column-major, 6x3 square matrix."],["Matrix6x4","A stack-allocated, column-major, 6x4 square matrix."],["Matrix6x5","A stack-allocated, column-major, 6x5 square matrix."],["MatrixCross","The type of the result of a matrix cross product."],["MatrixMN","A staticaly sized column-major matrix with `R` rows and `C` columns."],["MatrixN","A staticaly sized column-major square matrix with `D` rows and columns."],["MatrixNM","A staticaly sized column-major matrix with `R` rows and `C` columns."],["MatrixSlice","A matrix slice."],["MatrixSliceMut","A matrix slice."],["MatrixSum","The type of the result of a matrix sum."],["RowDVector","A dynamically sized row vector."],["RowVector","A matrix with one row and `D` columns ."],["RowVector1","A stack-allocated, 1-dimensional row vector."],["RowVector2","A stack-allocated, 2-dimensional row vector."],["RowVector3","A stack-allocated, 3-dimensional row vector."],["RowVector4","A stack-allocated, 4-dimensional row vector."],["RowVector5","A stack-allocated, 5-dimensional row vector."],["RowVector6","A stack-allocated, 6-dimensional row vector."],["RowVectorN","A statically sized D-dimensional row vector."],["SquareMatrix","A square matrix."],["Vector","A matrix with one column and `D` rows."],["Vector1","A stack-allocated, 1-dimensional column vector."],["Vector2","A stack-allocated, 2-dimensional column vector."],["Vector3","A stack-allocated, 3-dimensional column vector."],["Vector4","A stack-allocated, 4-dimensional column vector."],["Vector5","A stack-allocated, 5-dimensional column vector."],["Vector6","A stack-allocated, 6-dimensional column vector."],["VectorN","A statically sized D-dimensional column vector."],["VectorSum","The type of the result of a matrix sum."]]});