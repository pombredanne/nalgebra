(function() {var implementors = {};
implementors["nalgebra"] = ["impl&lt;N, R:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, C:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>&gt; AbstractGroup&lt;Additive&gt; for <a class=\"type\" href=\"nalgebra/core/type.MatrixMN.html\" title=\"type nalgebra::core::MatrixMN\">MatrixMN</a>&lt;N, R, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"nalgebra/core/trait.Scalar.html\" title=\"trait nalgebra::core::Scalar\">Scalar</a> + AbstractGroup&lt;Additive&gt; + <a class=\"trait\" href=\"https://rust-num.github.io/num/num_traits/identities/trait.Zero.html\" title=\"trait num_traits::identities::Zero\">Zero</a> + ClosedAdd + ClosedNeg,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, R, C&gt;,&nbsp;</span>","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>&gt; AbstractGroup&lt;Multiplicative&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Rotation.html\" title=\"struct nalgebra::geometry::Rotation\">Rotation</a>&lt;N, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, D, D&gt;,&nbsp;</span>","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>&gt; AbstractGroup&lt;Additive&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Quaternion.html\" title=\"struct nalgebra::geometry::Quaternion\">Quaternion</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>&gt; AbstractGroup&lt;Multiplicative&gt; for <a class=\"type\" href=\"nalgebra/geometry/type.UnitQuaternion.html\" title=\"type nalgebra::geometry::UnitQuaternion\">UnitQuaternion</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>&gt; AbstractGroup&lt;Multiplicative&gt; for <a class=\"type\" href=\"nalgebra/geometry/type.UnitComplex.html\" title=\"type nalgebra::geometry::UnitComplex\">UnitComplex</a>&lt;N&gt;","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>&gt; AbstractGroup&lt;Multiplicative&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Translation.html\" title=\"struct nalgebra::geometry::Translation\">Translation</a>&lt;N, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, D&gt;,&nbsp;</span>","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, R&gt; AbstractGroup&lt;Multiplicative&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Isometry.html\" title=\"struct nalgebra::geometry::Isometry\">Isometry</a>&lt;N, D, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Rotation&lt;<a class=\"struct\" href=\"nalgebra/geometry/struct.Point.html\" title=\"struct nalgebra::geometry::Point\">Point</a>&lt;N, D&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, D&gt;,&nbsp;</span>","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimName.html\" title=\"trait nalgebra::core::dimension::DimName\">DimName</a>, R&gt; AbstractGroup&lt;Multiplicative&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Similarity.html\" title=\"struct nalgebra::geometry::Similarity\">Similarity</a>&lt;N, D, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Rotation&lt;<a class=\"struct\" href=\"nalgebra/geometry/struct.Point.html\" title=\"struct nalgebra::geometry::Point\">Point</a>&lt;N, D&gt;&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, D&gt;,&nbsp;</span>","impl&lt;N:&nbsp;<a class=\"trait\" href=\"nalgebra/trait.Real.html\" title=\"trait nalgebra::Real\">Real</a>, D:&nbsp;<a class=\"trait\" href=\"nalgebra/core/dimension/trait.DimNameAdd.html\" title=\"trait nalgebra::core::dimension::DimNameAdd\">DimNameAdd</a>&lt;<a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;, C&gt; AbstractGroup&lt;Multiplicative&gt; for <a class=\"struct\" href=\"nalgebra/geometry/struct.Transform.html\" title=\"struct nalgebra::geometry::Transform\">Transform</a>&lt;N, D, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"nalgebra/geometry/trait.SubTCategoryOf.html\" title=\"trait nalgebra::geometry::SubTCategoryOf\">SubTCategoryOf</a>&lt;<a class=\"enum\" href=\"nalgebra/geometry/enum.TProjective.html\" title=\"enum nalgebra::geometry::TProjective\">TProjective</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"nalgebra/core/default_allocator/struct.DefaultAllocator.html\" title=\"struct nalgebra::core::default_allocator::DefaultAllocator\">DefaultAllocator</a>: <a class=\"trait\" href=\"nalgebra/core/allocator/trait.Allocator.html\" title=\"trait nalgebra::core::allocator::Allocator\">Allocator</a>&lt;N, <a class=\"type\" href=\"nalgebra/core/dimension/type.DimNameSum.html\" title=\"type nalgebra::core::dimension::DimNameSum\">DimNameSum</a>&lt;D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;, <a class=\"type\" href=\"nalgebra/core/dimension/type.DimNameSum.html\" title=\"type nalgebra::core::dimension::DimNameSum\">DimNameSum</a>&lt;D, <a class=\"struct\" href=\"nalgebra/core/dimension/struct.U1.html\" title=\"struct nalgebra::core::dimension::U1\">U1</a>&gt;&gt;,&nbsp;</span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
