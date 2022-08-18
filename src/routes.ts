import { UserController } from "./controller/UserController"
import { ThemeController } from "./controller/ThemeController"
import { AuthHandler } from "./auth/AuthHandler"

export const Routes = [{
    method: "get",
    route: "/api/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/api/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "put",
    route: "/api/users",
    controller: UserController,
    action: "save"
}, {
    method: "post",
    route: "/api/users",
    controller: UserController,
    action: "modify"
}, {
    method: "delete",
    route: "/api/users/:id",
    controller: UserController,
    action: "remove"
}, {
    method: "get",
    route: "/api/themes/:id",
    controller: ThemeController,
    action: "one"
}, {
    method: "post",
    route: "/api/themes/",
    controller: ThemeController,
    action: "save"
}, {
    method: "delete",
    route: "/api/themes/:id",
    controller: ThemeController,
    action: "remove"
}, {
    method: "post",
    route: "/login",
    controller: AuthHandler,
    action: "generateAuth"
}]
