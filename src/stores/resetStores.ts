import useEmailStore from "./emailStore";
import useTokenStore from "./tokenStore";
import useUsernameStore from "./usernameStore";

export function resetStores() {
    [useTokenStore(), useUsernameStore(), useEmailStore()].map((store) => store.$reset());
}