(function() {var implementors = {};
implementors["nalgebra"] = ["impl&lt;'b, N, R1, C1, R2, C2, SA, SB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;&amp;'b <a class=\"struct\" href=\"nalgebra/core/struct.Matrix.html\" title=\"struct nalgebra::core::Matrix\">Matrix</a>&lt;N, R2, C2, SB&gt;&gt; for <a class=\"struct\" href=\"nalgebra/core/struct.Matrix.html\" title=\"struct nalgebra::core::Matrix\">Matrix</a>&lt;N, R1, C1, SA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R1: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C1: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R2: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C2: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + ClosedAdd,<br>&nbsp;&nbsp;&nbsp;&nbsp;SA: <a class=\"trait\" href=\"nalgebra/core/storage/trait.StorageMut.html\" title=\"trait nalgebra::core::storage::StorageMut\">StorageMut</a>&lt;N, R1, C1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: <a class=\"trait\" href=\"nalgebra/core/storage/trait.Storage.html\" title=\"trait nalgebra::core::storage::Storage\">Storage</a>&lt;N, R2, C2&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::core::constraint::ShapeConstraint\">ShapeConstraint</a>: <a class=\"trait\" href=\"nalgebra/core/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::core::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;R1, R2&gt; + <a class=\"trait\" href=\"nalgebra/core/constraint/trait.SameNumberOfColumns.html\" title=\"trait nalgebra::core::constraint::SameNumberOfColumns\">SameNumberOfColumns</a>&lt;C1, C2&gt;,&nbsp;</span>","impl&lt;N, R1, C1, R2, C2, SA, SB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;<a class=\"struct\" href=\"nalgebra/core/struct.Matrix.html\" title=\"struct nalgebra::core::Matrix\">Matrix</a>&lt;N, R2, C2, SB&gt;&gt; for <a class=\"struct\" href=\"nalgebra/core/struct.Matrix.html\" title=\"struct nalgebra::core::Matrix\">Matrix</a>&lt;N, R1, C1, SA&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R1: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C1: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;R2: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;C2: <a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + ClosedAdd,<br>&nbsp;&nbsp;&nbsp;&nbsp;SA: <a class=\"trait\" href=\"nalgebra/core/storage/trait.StorageMut.html\" title=\"trait nalgebra::core::storage::StorageMut\">StorageMut</a>&lt;N, R1, C1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: <a class=\"trait\" href=\"nalgebra/core/storage/trait.Storage.html\" title=\"trait nalgebra::core::storage::Storage\">Storage</a>&lt;N, R2, C2&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::core::constraint::ShapeConstraint\">ShapeConstraint</a>: <a class=\"trait\" href=\"nalgebra/core/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::core::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;R1, R2&gt; + <a class=\"trait\" href=\"nalgebra/core/constraint/trait.SameNumberOfColumns.html\" title=\"trait nalgebra::core::constraint::SameNumberOfColumns\">SameNumberOfColumns</a>&lt;C1, C2&gt;,&nbsp;</span>","impl&lt;'b, N, D1:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, D2:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>, SB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;&amp;'b <a class=\"type\" href=\"nalgebra/core/type.Vector.html\" title=\"type nalgebra::core::Vector\">Vector</a>&lt;N, D2, SB&gt;&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Point.html\" title=\"struct nalgebra::geometry::Point\">Point</a>&lt;N, D1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + ClosedAdd,<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: <a class=\"trait\" href=\"nalgebra/core/storage/trait.Storage.html\" title=\"trait nalgebra::core::storage::Storage\">Storage</a>&lt;N, D2&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, D1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::core::constraint::ShapeConstraint\">ShapeConstraint</a>: <a class=\"trait\" href=\"nalgebra/core/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::core::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;D1, D2&gt;,&nbsp;</span>","impl&lt;N, D1:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, D2:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.Dim.html\" title=\"trait nalgebra::core::dimension::Dim\">Dim</a>, SB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;<a class=\"type\" href=\"nalgebra/core/type.Vector.html\" title=\"type nalgebra::core::Vector\">Vector</a>&lt;N, D2, SB&gt;&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Point.html\" title=\"struct nalgebra::geometry::Point\">Point</a>&lt;N, D1&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + ClosedAdd,<br>&nbsp;&nbsp;&nbsp;&nbsp;SB: <a class=\"trait\" href=\"nalgebra/core/storage/trait.Storage.html\" title=\"trait nalgebra::core::storage::Storage\">Storage</a>&lt;N, D2&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, D1&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/constraint/struct.ShapeConstraint.html\" title=\"struct nalgebra::core::constraint::ShapeConstraint\">ShapeConstraint</a>: <a class=\"trait\" href=\"nalgebra/core/constraint/trait.SameNumberOfRows.html\" title=\"trait nalgebra::core::constraint::SameNumberOfRows\">SameNumberOfRows</a>&lt;D1, D2&gt;,&nbsp;</span>","impl&lt;'b, N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;&amp;'b <a class=\"struct\" href=\"nalgebra/geometry/struct.Quaternion.html\" title=\"struct nalgebra::geometry::Quaternion\">Quaternion</a>&lt;N&gt;&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Quaternion.html\" title=\"struct nalgebra::geometry::Quaternion\">Quaternion</a>&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt; + <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,&nbsp;</span>","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a>&lt;<a class=\"struct\" href=\"nalgebra/geometry/struct.Quaternion.html\" title=\"struct nalgebra::geometry::Quaternion\">Quaternion</a>&lt;N&gt;&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Quaternion.html\" title=\"struct nalgebra::geometry::Quaternion\">Quaternion</a>&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt; + <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U4.html\" title=\"struct nalgebra::core::dimension::U4\">U4</a>, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
