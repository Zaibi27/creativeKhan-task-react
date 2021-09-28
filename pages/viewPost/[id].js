import { useSelector } from "react-redux" ; 
import { selectPostById } from "../../features/posts/postSlice" ; 
import {useRouter} from "next/router" ; 
import ViewPost from "../../components/viewPost" ; 
export default function Index() {
    const router = useRouter() ;
    const {id} = router.query ;
    const selectedPost = useSelector(state => selectPostById(state, parseInt(id))) ; 
    
    return (
        <div className="h-screen bg-gray-800 text-white">
            {selectedPost && 
            <div>
                <ViewPost post={selectedPost} />
            </div>
            }
        </div>
    )
}
