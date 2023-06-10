import useEmailStore from "./emailStore";
import useTokenStore from "./tokenStore";
import useUserIdStore from "./useridStore";
import useUsernameStore from "./usernameStore";

export function resetStores() {
    [useTokenStore(), useUsernameStore(), useEmailStore(), useUserIdStore()].map((store) => store.$reset());
}